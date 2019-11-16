// Dependencies
import React from "react";
import classnames from 'classnames';
import { connect } from "react-redux";
import { PDFDownloadLink } from '@react-pdf/renderer';
import {
  Button,
  Col,
  Divider,
  Icon,
  Input,
  List,
	Modal,
	Popconfirm,
  Row
} from "antd";
// Actions
import { addCard, deleteCard, editCard, fetchCards, importCards } from "../../actions/card";
// Components
import PrintCards from './components/PrintCards';
import Notification from './components/Notification';
// Styled
import { Content, Header, Title } from "./styles";

const Home = ({ addCard, cards, deleteCard, editCard, fetchCards, history, importCards }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [error, setError] = React.useState(false);
  const [card, setCard] = React.useState({});
  const [editing, setEditing] = React.useState(false);
	const [selected, setSelected] = React.useState(null);
	const fileRef = React.useRef(null);

	const getFile = () => fileRef.current.click();

  const handleSubmit = () => {
		if (typeof card.name === 'undefined' || card.name === "") {
			return setError(true);
		}

		const cardToSave = {
			name: card.name,
			description: card.description ? card.description.substr(0, 140) : '',
		}

    if (editing) {
      editCard(selected, cardToSave);
    } else {
      addCard(cardToSave);
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

	const exportCards = () => {
    const data = 'data:application/json;charset=utf-8,'+ encodeURIComponent(JSON.stringify(cards, null, 2));
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', data);
    linkElement.setAttribute('download', 'cards.json');
		linkElement.click();
		linkElement.remove();
	}

  const deleteItem = item => () => {
    deleteCard(item.id);
	};

	const viewItem = (item) => () => history.push({
		pathname: `/cards/${item.id}`,
		state: { id: item.id }
	});

	React.useEffect(() => {
		fetchCards();
	}, [fetchCards]);

	const importFile = React.useCallback((e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				const fileCards = JSON.parse(e.target.result);
				importCards(fileCards);
			};
			reader.readAsText(file);
		}
	}, [importCards]);

	React.useEffect(() => {
		const file = fileRef.current;
		file.addEventListener('change', importFile);

		return () => {
			if (file) {
				file.removeEventListener('change', importFile);
			}
		}
	}, [fileRef, importFile]);

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
									<Popconfirm
										title="Are you sure delete this card?"
										onConfirm={deleteItem(item)}
										okText="Yes"
										cancelText="No"
									>
										<Icon type="delete" />
									</Popconfirm>,
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
        <Divider />
        <Row type="flex" justify="space-between">
          <Col>
						<input ref={fileRef} accept="application/json" className="hidden" type="file" />
						<Button onClick={getFile}>
							Import
						</Button>
          </Col>
					{ cards.length > 0 && (
						<>
							<Col>
								<Button onClick={exportCards}>
									Export
								</Button>
							</Col>
							<Col>
								<Button>
									<PDFDownloadLink document={<PrintCards cards={cards} />} fileName="cards.pdf">
										Download as PDF
									</PDFDownloadLink>
								</Button>
							</Col>
						</>
					)}
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
			<Notification />
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
	fetchCards: () => dispatch(fetchCards()),
	importCards: (data) => dispatch(importCards(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
