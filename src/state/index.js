import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/authSlice';
import maliceSlice from './reducers/maliceSlice';

const store = configureStore({
	reducer: {
		malice: maliceSlice.reducer,
		auth: authSlice.reducer,
	},
});

export default store;
