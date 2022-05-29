import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	id: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		logIn(state, action) {
			state.id = action.payload.id;
		},
		logout(state) {
			state.id = '';
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice;
