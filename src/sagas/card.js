// Dependencies
import { takeLatest } from 'redux-saga/effects';
// Sagas
import { addCard, editCard, fetchCards } from './resources/card';
// Actions
import { ADD_CARD, EDIT_CARD, FETCH_CARDS } from '../actions';

function* cardSaga() {
	yield takeLatest(ADD_CARD, addCard);
	yield takeLatest(EDIT_CARD, editCard);
	yield takeLatest(FETCH_CARDS, fetchCards);
}

export default cardSaga;