const getStorage = () => {
	const storage = localStorage.getItem("cards");
	return JSON.parse(storage) || [];
}

const setStorage = (data) => localStorage.setItem("cards", JSON.stringify(data));

export const addCard = async data =>
  new Promise(resolve => {
		const cards = getStorage();
		const lastIndex = cards.map(c => (c.id)).sort((a, b) => a - b).pop()
    cards.push({ id: lastIndex + 1, ...data });
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

export const importCards = async (data) =>
	new Promise(resolve => {
		const cards = getStorage();

		data.map(({ id, name, description }) => {
			if (typeof id === 'undefined') {
				const lastIndex = cards.map(c => (c.id)).sort((a, b) => a - b).pop();
				cards.push({ id: lastIndex + 1, name, description });
				return true;
			}

			const cardIndex = cards.findIndex(card => card.id === id);

			if (cardIndex >= 0) {
				cards[cardIndex] = {...cards[cardIndex], name, description: description.substr(0, 140) };
				return true;
			}

			cards.push({ id, name, description: description.substr(0, 140) });
			return true;
		});

		setStorage(cards);
		return resolve(cards);
	})
