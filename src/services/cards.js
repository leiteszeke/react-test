export const addCard = async data =>
  new Promise(resolve => {
    const storage = localStorage.getItem("cards");
    const cards = JSON.parse(storage) || [];
    cards.push(data);
    localStorage.setItem("cards", JSON.stringify(cards));
    return resolve(cards);
  });

export const editCard = async (id, data) =>
  new Promise(resolve => {
    const storage = localStorage.getItem("cards");
    const cards = JSON.parse(storage) || [];
    const cardIndex = cards.findIndex(card => card.id === id);
    cards[cardIndex] = { ...cards[cardIndex], ...data };
    localStorage.setItem("cards", JSON.stringify(cards));
    return resolve(cards);
  });

export const fetchCards = async () =>
  new Promise(resolve => {
    const storage = localStorage.getItem("cards");
    const cards = JSON.parse(storage) || [];
    return resolve(cards);
  });
