import { createSlice } from '@reduxjs/toolkit';

const MENIIJI = [
	{
		id: 1,
		ime: 'Mesni meni',
		vsebina: ['riž', 'piščanec', 'omaka', 'solata - zelena', 'pijača'],
		tip: 'mesni',
	},
	{
		id: 2,
		ime: 'Vegi meni',
		vsebina: ['krompir', 'soja', 'zelenjava', 'solata - mešana', 'pijača'],
		tip: 'vegi',
	},
	{
		id: 3,
		ime: 'Lahki meni',
		vsebina: ['Sendvič', 'Jogurt', 'Jabolko', 'pijača'],
		tip: 'lahki',
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
	},
];

const initialStateMalice = {
	malice: [],
	narocenaMalica: [],
};

const maliceSlice = createSlice({
	name: 'malice',
	initialState: initialStateMalice,
	reducers: {
		setMalice(state, action) {
			state.malice = [...state.malice, ...action.payload.malice];
		},
		setNarocenaMalica(state, action) {
			state.narocenaMalica = action.payload.naroceno;
		},
		narociMalico(state, action) {
			console.log(action.payload);
			state.narocenaMalica.push(action.payload.malica);
		},
		odpovejMalico(state, action) {
			console.log(action.payload.id);
			state.narocenaMalica.splice(action.payload.id, 1);
		},
	},
});

export const fetchMalice = () => {
	return (dispatch) => {
		dispatch(
			maliceActions.setMalice({
				malice: MENIIJI,
			})
		);
		return;
	};
};

const chooseRandomMalica = () => {
	const randomId = Math.floor(Math.random() * 4 + 1);
	const malica = MENIIJI.find((meni) => meni.id === randomId);
	const malicaTransformed = {
		...malica,
		datum: new Date().toISOString(),
	};
	return malicaTransformed;
};

export const fetchNarocenaMalica = () => {
	return (dispatch) => {
		const fetchedMalice = [chooseRandomMalica()];
		dispatch(
			maliceActions.setNarocenaMalica({
				naroceno: fetchedMalice,
			})
		);
		return;
	};
};

export const maliceActions = maliceSlice.actions;

export default maliceSlice;
