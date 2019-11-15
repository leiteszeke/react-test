// Services
import * as api from "../../../services/cards";
// Sagas
import {
  fetchCards as fetch,
  addCard as add,
  editCard as edit
} from "../../../sagas/resources/card";
// Utils
import { recordSaga } from "../../utils";
// Mocks
import { mockCard } from "../../../mocks/card";
// Types
import {
  CARDS_FETCHED_SUCCESS,
  CARD_CREATE_SUCCESS,
  CARD_EDIT_SUCCESS
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

  const editSuccess = {
    payload: {
      cards: [{ ...mockCard, description: "A fake description changed" }]
    },
    type: CARD_EDIT_SUCCESS
  };

  api.fetchCards = jest.fn();
  api.addCard = jest.fn();
  api.editCard = jest.fn();

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
});
