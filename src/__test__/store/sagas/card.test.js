// Services
import * as api from "../../../services/cards";
// Sagas
import {
  fetchCards as fetch,
  addCard as add,
	editCard as edit,
	getCard as get,
	deleteCard as remove,
} from "../../../sagas/resources/card";
// Utils
import { recordSaga } from "../../utils";
// Mocks
import { mockCard } from "../../../mocks/card";
// Types
import {
  CARDS_FETCHED_SUCCESS,
	CARD_CREATE_SUCCESS,
	CARD_DELETE_SUCCESS,
  CARD_EDIT_SUCCESS,
	CARD_FETCHED_SUCCESS
} from "../../../actions";

describe("Card Saga", () => {
  const fetchSuccess = {
    payload: { cards: [mockCard] },
    type: CARDS_FETCHED_SUCCESS
  };

  const createSuccess = {
    payload: { cards: [mockCard] },
    type: CARD_CREATE_SUCCESS
	};

  const getSuccess = {
    payload: { card: mockCard },
    type: CARD_FETCHED_SUCCESS
	};

  const deleteSuccess = {
    payload: { cards: [] },
    type: CARD_DELETE_SUCCESS
  };

  const editSuccess = {
    payload: {
      cards: [{ ...mockCard, description: "A fake description changed" }]
    },
    type: CARD_EDIT_SUCCESS
  };

  api.fetchCards = jest.fn();
  api.addCard = jest.fn();
  api.editCard = jest.fn();
  api.getCard = jest.fn();
  api.deleteCard = jest.fn();

  it("get success fetch", async () => {
    api.fetchCards.mockImplementationOnce(() => [mockCard]);
    const dispatched = await recordSaga(fetch);
    expect(api.fetchCards).toHaveBeenCalled();
    expect(dispatched).toContainEqual(fetchSuccess);
  });

  it("create a card", async () => {
    api.addCard.mockImplementationOnce(() => [mockCard]);
    const dispatched = await recordSaga(add, {
      name: "Fake Card",
      description: "A fake description"
    });
    expect(api.addCard).toHaveBeenCalled();
    expect(dispatched).toContainEqual(createSuccess);
  });

  it("edit a card", async () => {
    api.editCard.mockImplementationOnce(() => [
      { ...mockCard, description: "A fake description changed" }
    ]);
    const dispatched = await recordSaga(edit, {
      payload: {
        id: 1,
        data: {
          name: "Fake Card",
          description: "A fake description changed"
        }
      }
    });
    expect(api.editCard).toHaveBeenCalled();
    expect(dispatched).toContainEqual(editSuccess);
	});

  it("get a card", async () => {
    api.getCard.mockImplementationOnce(() => ({ ...mockCard }));
    const dispatched = await recordSaga(get, { payload: 1 });
    expect(api.getCard).toHaveBeenCalled();
    expect(dispatched).toContainEqual(getSuccess);
  });

  it("delete a card", async () => {
    api.deleteCard.mockImplementationOnce(() => ([]));
    const dispatched = await recordSaga(remove, { payload: 1 });
    expect(api.deleteCard).toHaveBeenCalled();
    expect(dispatched).toContainEqual(deleteSuccess);
  });
});
