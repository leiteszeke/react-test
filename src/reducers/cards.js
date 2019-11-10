import { CARD_CREATE_SUCCESS, CARD_EDIT_SUCCESS, CARDS_FETCHED_SUCCESS } from "../actions";

const initialState = {
	cards: []
}

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case CARD_CREATE_SUCCESS:
		case CARD_EDIT_SUCCESS:
		case CARDS_FETCHED_SUCCESS:
			return {
				...state,
				cards: action.payload.cards
			}

		default:
			return {
				...state
			}
	}
}

export default cardReducer;