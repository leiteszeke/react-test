// Dependencies
import { combineReducers } from "redux";
// Reducers
import cards from "./cards";
import notifications from "./notifications";

export default combineReducers({
	cards,
	notifications,
});
