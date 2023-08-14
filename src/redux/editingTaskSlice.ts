import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface EditingTaskState {
    value: Task | null;
  }
  
  const initialState: EditingTaskState = {
    value: null,
  };
  
  const editingTask = createSlice({
    name: 'editingTask',
    initialState,
    reducers: {
      setEditingTask: (state, action: PayloadAction<Task | null>) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setEditingTask } = editingTask.actions;
  export default editingTask.reducer;
