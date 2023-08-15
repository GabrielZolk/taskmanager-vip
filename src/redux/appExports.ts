import { setValidationError } from './validationErrorSlice';
import { setIsMenuOpen } from './menuSlice';
import { setFilterOption } from './filterOptionsSlice';
import { setFilteredTasks } from './filterTasksSlice';
import { setSearchTerm } from './searchTermSlice';
import { setCurrentPage } from './currentPageSlice';
import { setEditingTask } from './editingTaskSlice';
import { setIsModalOpen } from './modalSlice';
import { setTaskInput } from './taskInputSlice';
import { setTasks } from './tasksSlice';

export const reduxImports = {
    setValidationError,
    setIsMenuOpen,
    setFilterOption,
    setFilteredTasks,
    setSearchTerm,
    setCurrentPage,
    setEditingTask,
    setIsModalOpen,
    setTaskInput,
    setTasks
}