import { configureStore } from "@reduxjs/toolkit";
import validationErrorSlice from "./validationErrorSlice";
import menuSlice from "./menuSlice";
import filterOptionsSlice from "./filterOptionsSlice";
import filterTasksSlice from "./filterTasksSlice";
import searchTermSlice from "./searchTermSlice";
import currentPageSlice from "./currentPageSlice";
import editingTaskSlice from "./editingTaskSlice";
import modalSlice from "./modalSlice";
import taskInputSlice from "./taskInputSlice";
import tasksSlice from "./tasksSlice";

export const store = configureStore({
    reducer: {
        validationErrorSlice,
        menuSlice,
        filterOptionsSlice,
        filterTasksSlice,
        searchTermSlice,
        currentPageSlice,
        editingTaskSlice,
        modalSlice,
        taskInputSlice,
        tasksSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch;