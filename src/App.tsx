import './App.css';
import { useEffect } from 'react';
import { AppBar, Container } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux';
import { v4 } from 'uuid';

import { Task } from './types/Task';
import { reduxImports } from './redux/appExports';

import ModalComponent from './components/Modal';
import ListComponent from './components/List';
import ButtonComponent from './components/Button';
import DrawerComponent from './components/Drawer';
import ToolbarComponent from './components/Toolbar';
import PagesComponent from './components/PagesComponent';
import TaskInput from './components/TaskInput';
import LogoutButton from './components/LogoutButton';
import { loadTasksFromDatabase } from './services/loadDatabase';
import { saveTaskToDatabase } from './services/saveDatabase';

function App() {
  const searchTerm = useSelector((state: RootState) => state.searchTermSlice.value);

  const taskInput = useSelector((state: RootState) => state.taskInputSlice.value);
  const tasks = useSelector((state: RootState) => state.tasksSlice.value);

  const dispatch = useDispatch();

  const tasksPerPage = 5;

  useEffect(() => {
    const filtered = tasks.filter(task =>
      task.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(reduxImports.setFilteredTasks(filtered));
  }, [tasks, searchTerm, dispatch]);

  useEffect(() => {
    const fetchTasks = async () => {
        const loadedTasks = await loadTasksFromDatabase();

        if (loadedTasks.length > 0) {
            dispatch(reduxImports.setTasks(loadedTasks));
            dispatch(reduxImports.setFilteredTasks(loadedTasks));
        }
    };

    fetchTasks();
}, [dispatch]);

  const handleTaskAdd = () => {
    if (taskInput) {
      const newTask: Task = {
        id: v4(),
        date: Date.now(),
        content: taskInput,
        completed: false,
      };
      dispatch(reduxImports.setTasks([...tasks, newTask]));
      dispatch(reduxImports.setTaskInput(''));
      saveTaskToDatabase(newTask)
    }
  };

  return (
    <div>
      <AppBar position="static">
        <ToolbarComponent />
      </AppBar>
      <DrawerComponent />
      <Container style={{ marginTop: '20px' }}>
        <TaskInput handleTaskAdd={handleTaskAdd} />
        <ButtonComponent handleTaskAdd={handleTaskAdd} label='Add Task' />
        <ListComponent tasksPerPage={tasksPerPage} />
        <PagesComponent tasksPerPage={tasksPerPage} />
        <ModalComponent />
        <LogoutButton />
      </Container>
    </div>
  );
}

export default App;
