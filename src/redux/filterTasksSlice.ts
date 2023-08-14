import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../types/Task';

interface FilteredTasksState {
    value: Task[];
  }
  
  const initialState: FilteredTasksState = {
    value: [],
  };
  
  const filteredTasks = createSlice({
    name: 'filteredTasks',
    initialState,
    reducers: {
      setFilteredTasks: (state, action: PayloadAction<Task[]>) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setFilteredTasks } = filteredTasks.actions;
  export default filteredTasks.reducer;