import {
	CARD_CREATE_SUCCESS,
	CARD_DELETE_SUCCESS,
	CARD_EDIT_SUCCESS,
	HIDE_NOTIFICATION
} from "../actions";

const initialState = {
	show: false,
	data: {},
}

export const cardReducer = (state = initialState, action) => {
	switch (action.type) {
		case CARD_DELETE_SUCCESS:
			return {
				...state,
				show: true,
				data: {
					title: 'Delete Card',
					text: 'The card was deleted successfully.'
				}
			}

		case CARD_CREATE_SUCCESS:
			return {
				...state,
				show: true,
				data: {
					title: 'Create Card',
					text: 'The card was created successfully.'
				}
			}

		case CARD_EDIT_SUCCESS:
			return {
				...state,
				show: true,
				data: {
					title: 'Update Card',
					text: 'The card was updated successfully.'
				}
			}

		case HIDE_NOTIFICATION:
			return {
				...state,
				show: false,
				data: {}
			}

		default:
			return {
				...state
			}
	}
}

export default cardReducer;