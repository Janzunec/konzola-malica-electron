import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
	isLoggedIn: false,
	id: '',
	username: '',
	display_name: '',
	access_code: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState: initialAuthState,
	reducers: {
		logIn(state, action) {
			state.isLoggedIn = true;
			state.id = action.payload.id;
			state.username = action.payload.username;
			state.display_name = action.payload.display_name;
			state.access_code = action.payload.access_code;
		},
		logout(state) {
			state.isLoggedIn = false;
			state.id = '';
			state.username = '';
			state.display_name = '';
			state.access_code = '';
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice;
