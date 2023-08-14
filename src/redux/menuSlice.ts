import { createSlice } from '@reduxjs/toolkit';

const isMenuOpen = createSlice({
    name: 'isMenuOpen',
    initialState: {
      value: false
    },
    reducers: {
        setIsMenuOpen: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setIsMenuOpen } = isMenuOpen.actions;
  export default isMenuOpen.reducer;