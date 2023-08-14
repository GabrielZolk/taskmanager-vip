import { createSlice } from '@reduxjs/toolkit';

const taskInput = createSlice({
  name: 'taskInput',
  initialState: {
    value: '',
  },
  reducers: {
    setTaskInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setTaskInput } = taskInput.actions;
export default taskInput.reducer;
