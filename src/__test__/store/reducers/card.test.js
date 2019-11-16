// Types
import {
  CARDS_FETCHED_SUCCESS,
  CARD_EDIT_SUCCESS,
  CARD_CREATE_SUCCESS,
	CARD_DELETE_SUCCESS
} from "../../../actions";
// Reducer
import reducer from "../../../reducers/cards";
// Mocks
import { mockCard } from "../../../mocks/card";

describe("Login store reducer", () => {
  const initialState = {
		cards: [],
		card: {}
  };

  it("Should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should fetch cards", () => {
    expect(
      reducer(initialState, {
        payload: { cards: [mockCard] },
        type: CARDS_FETCHED_SUCCESS
      })
    ).toEqual({ ...initialState, cards: [mockCard] });
  });

  it("should fetch cards after create", () => {
    expect(
      reducer(initialState, {
        payload: { cards: [mockCard] },
        type: CARD_CREATE_SUCCESS
      })
    ).toEqual({ ...initialState, cards: [mockCard] });
  });

  it("should fetch cards after update", () => {
    expect(
      reducer(initialState, {
        payload: { cards: [mockCard] },
        type: CARD_EDIT_SUCCESS
      })
    ).toEqual({ ...initialState, cards: [mockCard] });
	});

  it("should fetch cards after delete", () => {
    expect(
      reducer(initialState, {
        payload: { cards: [] },
        type: CARD_DELETE_SUCCESS
      })
    ).toEqual({ ...initialState, cards: [] });
  });
});
