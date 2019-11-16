// Actions
import { ADD_CARD, DELETE_CARD, EDIT_CARD, FETCH_CARDS, GET_CARD, IMPORT_CARDS } from '../actions';

export const addCard = (data) => ({
	type: ADD_CARD,
	payload: data
})

export const deleteCard = (id) => ({
	type: DELETE_CARD,
	payload: id
})

export const editCard = (id, data) => ({
	type: EDIT_CARD,
	payload: { id, data }
})

export const getCard = (id) => ({
	type: GET_CARD,
	payload: id
})

export const fetchCards = () => ({
	type: FETCH_CARDS,
})

export const importCards = (data) => ({
	type: IMPORT_CARDS,
	payload: data,
})