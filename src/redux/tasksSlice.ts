import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/Task";

interface TasksState {
    value: Task[];
}

const initialState: TasksState = {
    value: [],
};

const tasks = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.value = action.payload;
        },
    },
});

export const { setTasks } = tasks.actions;
export default tasks.reducer;