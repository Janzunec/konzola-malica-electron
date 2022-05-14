import React, { useCallback, useEffect, useState } from 'react';

const MENIIJI = [
	{
		id: 1,
		ime: 'Mesni meni',
		vsebina: ['riž', 'piščanec', 'omaka', 'solata - zelena', 'pijača'],
		tip: 'mesni',
		slika: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/05/Roast-beef-sirloin-bearnaise-dauphinoise-2-260f0d6.jpg?quality=90&resize=900,836',
	},
	{
		id: 2,
		ime: 'Vegi meni',
		vsebina: ['krompir', 'soja', 'zelenjava', 'solata - mešana', 'pijača'],
		tip: 'vegi',
		slika: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/PineappleFriedRice-e97ea07.jpg?quality=90&resize=556,505',
	},
	{
		id: 3,
		ime: 'Lahki meni',
		vsebina: ['Sendvič', 'Jogurt', 'Jabolko', 'pijača'],
		tip: 'lahki',
		slika: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F03%2Fmain%2Fgrilled-ham-chicken-gruyere-sandwiches-1211p260.jpg%3Fitok%3D9Hnbs1N2',
	},
	{
		id: 4,
		ime: 'Mešani meni',
		vsebina: [
			'krompir',
			'piščančji zrezek',
			'zelenjava',
			'solata - mešana',
			'pijača',
		],
		tip: 'mesani',
		slika: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2F1530030147%2Fchicken-and-bulgur-salad-with-peaches-1808-p17.jpg',
	},
];

const MaliceContext = React.createContext({
	// meniji: [],
	malice: [],
	user: '',
	setUser: () => {},
	fetchMalice: () => {},
	onNarociMalico: (id, datum) => {},
	onOdpovejMalico: (id) => {},
	fetchMeniji: (dan) => {},
});

export const MaliceContextProvider = (props) => {
	const [malice, setMalice] = useState([]);
	// const [meniji, setMeniji] = useState(MENIJI)

	const chooseRandomMalica = () => {
		const randomId = Math.floor(Math.random() * 4 + 1);
		const malica = MENIIJI.find((meni) => meni.id === randomId);
		malica.datum = new Date();
		return malica;
	};

	const fetchMeniji = (dan) => {
		return MENIIJI;
	};

	const fetchMalice = (user) => {
		const fetchedMalice = [chooseRandomMalica()];
		const maliceUpdated = [...malice, ...fetchedMalice];
		setMalice([...maliceUpdated]);
		return maliceUpdated;
	};

	useEffect(() => {
		fetchMalice();
	}, []);

	const onNarociMalico = (id, datum) => {
		// const indexMalice = malice.map((malica) => malica.id).indexOf(id);
		const maliceUpdated = [
			...malice,
			{
				datum,
				...MENIIJI[id - 1],
			},
		];
		setMalice([...maliceUpdated]);
	};

	const onOdpovejMalico = (id) => {
		// const indexMalice = malice.map((malica) => malica.id).indexOf(id);
		// console.log(indexMalice);
		const maliceUpdated = malice;
		malice.splice(id, 1);
		setMalice([...maliceUpdated]);
	};

	return (
		<MaliceContext.Provider
			value={{
				malice,
				fetchMalice,
				onNarociMalico,
				onOdpovejMalico,
				fetchMeniji,
			}}
		>
			{props.children}
		</MaliceContext.Provider>
	);
};

export default MaliceContext;
