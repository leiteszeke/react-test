// Dependencies
import { fork, all } from "redux-saga/effects";
// Sagas
import cardSaga from './card';

export default function* rootSaga() {
  yield all([
		fork(cardSaga)
	]);
}
