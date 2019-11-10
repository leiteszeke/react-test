// Actions
import { ADD_CARD, EDIT_CARD, FETCH_CARDS } from '../actions';

export const addCard = (data) => ({
	type: ADD_CARD,
	payload: data
})

export const editCard = (id, data) => ({
	type: EDIT_CARD,
	payload: { id, data }
})

export const fetchCards = () => ({
	type: FETCH_CARDS,
})