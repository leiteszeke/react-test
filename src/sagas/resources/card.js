// Services
import * as api from "../../services/cards";
// Dependencies
import { call, put } from "redux-saga/effects";
// Actions
import {
  CARD_CREATE_FAILED,
  CARD_CREATE_SUCCESS,
  CARD_DELETE_FAILED,
  CARD_DELETE_SUCCESS,
  CARD_EDIT_FAILED,
  CARD_EDIT_SUCCESS,
  CARD_FETCHED_FAILED,
  CARD_FETCHED_SUCCESS,
  CARDS_FETCHED_FAILED,
  CARDS_FETCHED_SUCCESS
} from "../../actions";

export function* addCard(action) {
  try {
    const data = yield call(api.addCard, action.payload);

    yield put({
      type: CARD_CREATE_SUCCESS,
      payload: {
        cards: data
      }
    });
  } catch (e) {
    yield put({ type: CARD_CREATE_FAILED, message: e.message });
  }
}

export function* editCard(action) {
  try {
    const data = yield call(
      api.editCard,
      action.payload.id,
      action.payload.data
    );

    yield put({
      type: CARD_EDIT_SUCCESS,
      payload: {
        cards: data
      }
    });
  } catch (e) {
    yield put({ type: CARD_EDIT_FAILED, message: e.message });
  }
}

export function* fetchCards() {
  try {
    const data = yield call(api.fetchCards);

    yield put({
      type: CARDS_FETCHED_SUCCESS,
      payload: {
        cards: data
      }
    });
  } catch (e) {
    yield put({ type: CARDS_FETCHED_FAILED, message: e.message });
  }
}

export function* deleteCard(action) {
  try {
    const data = yield call(api.deleteCard, action.payload);

    yield put({
      type: CARD_DELETE_SUCCESS,
      payload: {
        cards: data
      }
    });
  } catch (e) {
    yield put({ type: CARD_DELETE_FAILED, message: e.message });
  }
}

export function* getCard(action) {
  try {
    const data = yield call(api.getCard, action.payload);

    yield put({
      type: CARD_FETCHED_SUCCESS,
      payload: {
        card: data
      }
    });
  } catch (e) {
    yield put({ type: CARD_FETCHED_FAILED, message: e.message });
  }
}

export default {
  addCard,
	editCard,
	deleteCard,
	getCard,
  fetchCards
};
