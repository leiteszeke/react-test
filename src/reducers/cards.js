import {
	CARD_CREATE_SUCCESS,
	CARD_DELETE_SUCCESS,
	CARD_EDIT_SUCCESS,
	CARD_FETCHED_SUCCESS,
	CARDS_FETCHED_SUCCESS
} from "../actions";

const initialState = {
	cards: [],
	card: {}
}

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case CARD_CREATE_SUCCESS:
		case CARD_DELETE_SUCCESS:
		case CARD_EDIT_SUCCESS:
		case CARDS_FETCHED_SUCCESS:
			return {
				...state,
				cards: action.payload.cards
			}

		case CARD_FETCHED_SUCCESS:
			return {
				...state,
				card: action.payload.card
			}

		default:
			return {
				...state
			}
	}
}

export default cardReducer;