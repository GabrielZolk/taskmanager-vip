import { createSlice } from '@reduxjs/toolkit';

const currentPage = createSlice({
  name: 'currentPage',
  initialState: {
    value: 1,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPage.actions;
export default currentPage.reducer;
