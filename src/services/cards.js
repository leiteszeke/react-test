const getStorage = () => {
	const storage = localStorage.getItem("cards");
	return JSON.parse(storage) || [];
}

const setStorage = (data) => localStorage.setItem("cards", JSON.stringify(data));

export const addCard = async data =>
  new Promise(resolve => {
		const cards = getStorage();
    cards.push(data);
		setStorage(cards);
    return resolve(cards);
  });

export const editCard = async (id, data) =>
  new Promise(resolve => {
		const cards = getStorage();
    const cardIndex = cards.findIndex(card => card.id === id);
		cards[cardIndex] = { ...cards[cardIndex], ...data };
		setStorage(cards);
    return resolve(cards);
	});

export const getCard = async (id) =>
  new Promise(resolve => {
		const cards = getStorage();
		const card = cards.find(card => card.id === id);
    return resolve(typeof card === 'undefined' ? null : card);
	});

export const deleteCard = async (id) =>
	new Promise(resolve => {
		const cards = getStorage();
		const filteredCards = cards.filter(card => card.id !== id);
		setStorage(filteredCards);
		return resolve(filteredCards);
	});

export const fetchCards = async () =>
  new Promise(resolve => resolve(getStorage()));
