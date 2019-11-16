import { fetchCards, addCard, editCard, deleteCard, getCard } from "../../../actions/card";
import { FETCH_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD, GET_CARD } from "../../../actions";

describe("Card actions", () => {
  let expectedAction;

  it("Should send a fetch request", () => {
    expectedAction = {
      type: FETCH_CARDS
    };

    expect(fetchCards()).toEqual(expectedAction);
  });

  it("Should create a card", () => {
    expectedAction = {
      type: ADD_CARD
    };

    expect(addCard()).toEqual(expectedAction);
  });

  it("Should update a card", () => {
    expectedAction = {
      payload: {
				id: 1,
				data: {}
			},
      type: EDIT_CARD
    };

    expect(editCard(1, {})).toEqual(expectedAction);
	});

  it("Should get a card", () => {
    expectedAction = {
      payload: 1,
      type: GET_CARD
    };

    expect(getCard(1)).toEqual(expectedAction);
	});

  it("Should delete a card", () => {
    expectedAction = {
      payload: 1,
      type: DELETE_CARD
    };

    expect(deleteCard(1)).toEqual(expectedAction);
  });
});
