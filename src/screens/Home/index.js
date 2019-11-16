// Dependencies
import React from "react";
import classnames from 'classnames';
import { connect } from "react-redux";
import {
  Button,
  Col,
  Divider,
  Icon,
  Input,
  List,
  Modal,
  Row
} from "antd";
// Actions
import { addCard, deleteCard, editCard, fetchCards } from "../../actions/card";
// Styled
import { Content, Header, Title } from "./styles";

const Home = ({ addCard, cards, deleteCard, editCard, fetchCards, history }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [card, setCard] = React.useState({});
  const [editing, setEditing] = React.useState(false);
	const [selected, setSelected] = React.useState(null);

  const getNextId = () => {
    if (cards.length === 0) {
      return 1;
    }

    if (cards[cards.length - 1]) {
      return cards[cards.length - 1].id + 1;
    }
  };

  const handleSubmit = () => {
		if (typeof card.name === 'undefined' || card.name === "") {
			return setError(true);
		}

    if (editing) {
      editCard(selected, card);
    } else {
      addCard({
				id: getNextId(),
				name: card.name,
				description: card.description
			});
    }
    setCard({});
    setShowModal(false);
	};

  const handleChange = ({ target }) => {
		if (error) setError(false);
    setCard(prev => ({
      ...prev,
      [target.name]: target.value
    }));
	}

  const handleSearch = e => setSearch(e.target.value);

  const openModal = () => {
    setSearch("");
    setShowModal(true);
  };

  const closeModal = () => {
    setCard({});
    setShowModal(false);
  };

  const editItem = item => () => {
    setEditing(true);
    setSelected(item.id);
    setCard({ description: item.description, name: item.name });
    setShowModal(true);
	};

  const deleteItem = item => () => {
    deleteCard(item.id);
	};

	const viewItem = (item) => () => history.push({
		pathname: `/cards/${item.id}`,
		state: { id: item.id }
	});

	React.useEffect(() => {
		fetchCards();
	}, [fetchCards])

  React.useEffect(() => {
    if (!showModal && editing) {
      setEditing(false);
      setSelected(null);
    }
	}, [editing, showModal]);

  const filteredCards = cards.filter(card => card.name && card.name.includes(search));

  return (
    <React.Fragment>
      <Content>
        <Header>
          <Title>Card Game Maker</Title>
        </Header>
        <Row type="flex" justify="space-between">
          <Col span={18}>
            <Input
              placeholder="Card name"
              onChange={handleSearch}
              value={search}
            />
          </Col>
          <Col>
            <Button onClick={openModal}>New</Button>
          </Col>
        </Row>
        <Divider />

        <Row>
          <List
            bordered
            dataSource={filteredCards}
            renderItem={item => (
              <List.Item
								style={{ paddingLeft: 12, paddingRight: 12 }}
                actions={[
									<Icon type="delete" onClick={deleteItem(item)} />,
									<Icon type="eye" onClick={viewItem(item)} />,
									<Icon type="edit" onClick={editItem(item)} />
								]}
              >
                <Row
                  type="flex"
                  justify="space-between"
                  style={{ flex: 1 }}
                >
                  {item.name}
                </Row>
              </List.Item>
            )}
          />
        </Row>
      </Content>
      <Modal
        title={`${editing ? "Edit" : "Create"} a card`}
        visible={showModal}
        onCancel={closeModal}
        footer={[
          <Button key="back" onClick={closeModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        ]}
      >
        <Input
					className={classnames({error})}
          placeholder="Name *"
          type="text"
          name="name"
          onChange={handleChange}
          value={card.name}
        />
        <br />
        <br />
        <Input.TextArea
          placeholder="Description"
					name="description"
					maxLength={140}
          onChange={handleChange}
          autoSize={{ minRows: 2, maxRows: 3 }}
          value={card.description}
        />
      </Modal>
    </React.Fragment>
  );
};


const mapStateToProps = ({ cards: { cards } }) => ({
  cards,
});

const mapDispatchToProps = dispatch => ({
	addCard: (data) => dispatch(addCard(data)),
	deleteCard: (id) => dispatch(deleteCard(id)),
	editCard: (id, data) => dispatch(editCard(id, data)),
	fetchCards: () => dispatch(fetchCards())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
