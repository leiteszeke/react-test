// Dependencies
import { takeLatest } from 'redux-saga/effects';
// Sagas
import { addCard, deleteCard, editCard, fetchCards, getCard, importCards } from './resources/card';
// Actions
import { ADD_CARD, DELETE_CARD, EDIT_CARD, FETCH_CARDS, GET_CARD, IMPORT_CARDS } from '../actions';

function* cardSaga() {
	yield takeLatest(ADD_CARD, addCard);
	yield takeLatest(DELETE_CARD, deleteCard);
	yield takeLatest(EDIT_CARD, editCard);
	yield takeLatest(FETCH_CARDS, fetchCards);
	yield takeLatest(GET_CARD, getCard);
	yield takeLatest(IMPORT_CARDS, importCards);
}

export default cardSaga;