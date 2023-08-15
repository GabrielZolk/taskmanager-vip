export const loadTasksFromLocalStorage = () => {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};