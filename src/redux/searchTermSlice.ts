import { createSlice } from '@reduxjs/toolkit';

const searchTerm = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchTerm } = searchTerm.actions;
export default searchTerm.reducer;
