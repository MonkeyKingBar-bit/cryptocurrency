import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import _ from 'lodash';
import { Currency } from '../../models/interface_type';
import { fetchCurrencies } from './actionCreators';

interface CurrencyState {
    currencies: Currency[];
    paginatedCurrencies: Currency[];
    isLoading: boolean;
    error: string;
    currentPage: number;
}

const initialState: CurrencyState = {
  currencies: [],
  paginatedCurrencies: [],
  isLoading: false,
  error: '',
  currentPage: 1,
};

const pageSize = 10;

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    // currenciesFetchingSuccess(state, action: PayloadAction<Currency[]>) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.currencies = action.payload;
    // },
    // currenciesFetchingError(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    setPaginationCurrencies(state, action: PayloadAction<Currency[]>) {
      state.paginatedCurrencies = _(action.payload).slice(0).take(pageSize).value();
    },
  },
  extraReducers: {
    [fetchCurrencies.fulfilled.type]: (state, action: PayloadAction<Currency[]>) => {
      state.isLoading = false;
      state.error = '';
      state.currencies = action.payload;
      state.paginatedCurrencies = _(action.payload).slice(0).take(pageSize).value();
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

export const currencyActions = currencySlice.actions;
export default currencySlice.reducer;
