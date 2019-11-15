import { fetchCards, addCard, editCard } from "../../../actions/card";
import { FETCH_CARDS, ADD_CARD, EDIT_CARD } from "../../../actions";

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
      payload: {},
      type: EDIT_CARD
    };

    expect(editCard()).toEqual(expectedAction);
  });
});
