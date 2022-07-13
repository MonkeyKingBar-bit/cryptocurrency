import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalActive: false,
};

const commonSlice = createSlice({
  name: 'currencyList',
  initialState,
  reducers: {
    modalActive: (state) => {
      state.isModalActive = true;
    },
    setModalActive: (state) => {
      state.isModalActive = false;
    },
  },
});

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
