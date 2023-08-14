import { createSlice } from '@reduxjs/toolkit';

const isModalOpen = createSlice({
  name: 'isModalOpen',
  initialState: {
    value: false,
  },
  reducers: {
    setIsModalOpen: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIsModalOpen } = isModalOpen.actions;
export default isModalOpen.reducer;
