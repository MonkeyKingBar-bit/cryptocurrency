import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './reducers/common';
import currencyReducer from './reducers/currencySlice';

const store = configureStore({
  reducer: {
    common: commonReducer,
    currency: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
