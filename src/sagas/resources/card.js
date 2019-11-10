// Dependencies
import { call, put } from 'redux-saga/effects';
// Actions
import {
	CARD_CREATE_FAILED,
	CARD_CREATE_SUCCESS,
	CARD_EDIT_FAILED,
	CARD_EDIT_SUCCESS,
	CARDS_FETCHED_FAILED,
	CARDS_FETCHED_SUCCESS
} from '../../actions';

export function* addCard(action) {
	try {
		const data = yield call(() => {
			return new Promise(resolve => {
				const storage = localStorage.getItem('cards');
				const cards = JSON.parse(storage) || [];
				cards.push(action.payload);
				localStorage.setItem('cards', JSON.stringify(cards));
				return resolve(cards);
			})
		});

		yield put({
			type: CARD_CREATE_SUCCESS,
			payload: {
				cards: data
			}
		})
	} catch (e) {
		yield put({ type: CARD_CREATE_FAILED, message: e.message });
	}
}

export function* editCard(action) {
	try {
		const data = yield call(() => {
			return new Promise(resolve => {
				const storage = localStorage.getItem('cards');
				const cards = JSON.parse(storage) || [];
				const cardIndex = cards.findIndex(card => card.id === action.payload.id);
				cards[cardIndex] = { ...cards[cardIndex], ...action.payload.data };
				localStorage.setItem('cards', JSON.stringify(cards));
				return resolve(cards);
			})
		});

		yield put({
			type: CARD_EDIT_SUCCESS,
			payload: {
				cards: data
			}
		})
	} catch (e) {
		yield put({ type: CARD_EDIT_FAILED, message: e.message });
	}
}

export function* fetchCards() {
	try {
		const data = yield call(() => {
			return new Promise(resolve => {
				const storage = localStorage.getItem('cards');
				const cards = JSON.parse(storage) || [];
				return resolve(cards);
			})
		});

		yield put({
			type: CARDS_FETCHED_SUCCESS,
			payload: {
				cards: data
			}
		})
	} catch (e) {
		yield put({ type: CARDS_FETCHED_FAILED, message: e.message });
	}
}

export default {
	addCard,
	editCard,
	fetchCards
};