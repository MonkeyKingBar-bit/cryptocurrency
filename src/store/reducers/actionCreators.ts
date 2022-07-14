import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import _ from 'lodash';
import clientAPI from '../../services/clientAPI';
// import { AppDispatch } from '../store';
// import { currencyActions } from './currencySlice';
// import { AppDispatch } from '../store';

export const fetchCurrencies = createAsyncThunk(
  'currency/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await clientAPI.cryptocurrencies.getAll();
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Something was wrong!');
    }
  },
);

// const pageSize = 10;
//
// export const fetchCurrencies = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(currencyActions.currenciesFetching());
//     const response = await clientAPI.cryptocurrencies.getAll();
//     dispatch(currencyActions.currenciesFetchingSuccess(response.data.data));
//     dispatch(currencyActions.setPaginationCurrencies(
//       _(response.data.data).slice(0).take(pageSize).value(),
//     ));
//   } catch (e) {
//     dispatch(currencyActions.currenciesFetchingError(e.message));
//   }
// };
