// Dependencies
import React from "react";
import { connect } from "react-redux";
import { Icon, Typography } from "antd";
// Actions
import { getCard } from "../../actions/card";
// Styled
import { Content, CardItem, Header, Title } from "./styles";

const parseUrl = (url) => {
	const pathname = url.pathname;
	const regex = /(\/cards\/)(\d+)/;

	if (regex.test(pathname)) {
		return parseInt(pathname.replace('/cards/', ''));
	}

	return null;
}

const Card = ({ card, history, getCard }) => {
	const cardId = history.location.state ? history.location.state.id : parseUrl(history.location);

  React.useEffect(() => {
		if (cardId === null) {
			return window.location.href = '/';
		}

		getCard(cardId);
	}, [getCard, cardId]);

	const goBack = () => history.goBack();

	if (card === null) return window.location.href = '/';
	if (typeof card.id === 'undefined') return '';

  return (
    <React.Fragment>
      <Content>
				<Header>
          <Icon type="left" onClick={goBack} />
          <Title>Card Game Maker</Title>
				</Header>
        <CardItem>
          <Typography.Title>{card.name}</Typography.Title>
					<Typography.Text>{card.description}</Typography.Text>
        </CardItem>
      </Content>
    </React.Fragment>
  );
};


const mapStateToProps = ({ cards: { card } }) => ({
  card,
});

const mapDispatchToProps = dispatch => ({
	getCard: (id) => dispatch(getCard(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
