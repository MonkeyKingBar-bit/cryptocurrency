import { createAsyncThunk } from '@reduxjs/toolkit';
import clientAPI from '../../services/clientAPI';

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
