import { createSlice } from '@reduxjs/toolkit';

const filterOptions = createSlice({
  name: 'filterOptions',
  initialState: {
    value: 'all',
  },
  reducers: {
    setFilterOption: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFilterOption } = filterOptions.actions;
export default filterOptions.reducer;
