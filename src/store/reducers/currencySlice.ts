import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency } from '../../models/interface_type';
import { fetchCurrencies } from './actionCreators';

interface CurrencyState {
    currencies: Currency[];
    isLoading: boolean;
    error: string;
}

const initialState: CurrencyState = {
  currencies: [],
  isLoading: false,
  error: '',
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrencies.fulfilled.type]: (state, action: PayloadAction<Currency[]>) => {
      state.isLoading = false;
      state.error = '';
      state.currencies = action.payload;
    },
    [fetchCurrencies.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrencies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default currencySlice.reducer;
