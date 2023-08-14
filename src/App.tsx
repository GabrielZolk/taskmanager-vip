import { useState, useRef, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Modal,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';

import './App.css';

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
  const [filterOption, setFilterOption] = useState<'all' | 'completed' | 'incomplete'>('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [validationError, setValidationError] = useState<string>('');

  const isScreenWide = useMediaQuery('(min-width:1141px)');
  const isScreenNarrow = useMediaQuery('(max-width:1140px)');

  const editInputRef = useRef<HTMLInputElement | null>(null);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;

  const currentTasks = filteredTasks
    .filter(task => {
      if (filterOption === 'completed') {
        return task.completed;
      } else if (filterOption === 'incomplete') {
        return !task.completed;
      }
      return true;
    })
    .slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = filteredTasks.length > 0 ? Math.ceil(filteredTasks.length / tasksPerPage) : 1;

  useEffect(() => {
    const filtered = tasks.filter(task =>
      task.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [tasks, searchTerm]);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const loadTasksFromLocalStorage = () => {
    const tasksFromLocalStorage = localStorage.getItem('tasks');
    return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
  };

  useEffect(() => {
    const loadedTasks = loadTasksFromLocalStorage();

    if (loadedTasks.length > 0) {
      setTasks(loadedTasks);
      setFilteredTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const handleTaskAdd = () => {
    if (taskInput) {
      const newTask: Task = {
        id: Date.now(),
        content: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleTaskDelete = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleTaskEdit = (id: number, content: string) => {
    setEditingTask({ id, content, completed: false });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleTaskUpdate = () => {
    if (editingTask && editingTask.content.trim() === '') {
      setValidationError('Task cannot be empty');
      return;
    }

    const updatedTasks = tasks.map(task =>
      task.id === editingTask?.id ? { ...task, content: editingTask.content } : task
    );
    setTasks(updatedTasks);
    handleModalClose();
    setValidationError('');
  };

  const handleTaskToggleCompleted = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar id="toolbar">
          <Typography variant="h6">Task Manager</Typography>
          {isScreenWide && (
            <>
              <TextField
                label="Search tasks..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <Box display="flex" alignItems="center">
                      <IconButton onClick={() => setSearchTerm('')} edge="end">
                        {searchTerm ? <ClearIcon /> : <SearchIcon />}
                      </IconButton>
                    </Box>
                  ),
                }}
                style={{ margin: '10px' }}
              />
              <RadioGroup
                aria-label="task-filter"
                name="task-filter"
                value={filterOption}
                onChange={(e) =>
                  setFilterOption(e.target.value as 'all' | 'completed' | 'incomplete')
                }
                style={{ flexDirection: 'row' }}
              >
                <FormControlLabel value="all" control={<Radio className="done-filter-input" />} label="All" />
                <FormControlLabel value="completed" control={<Radio className="done-filter-input" />} label="Complete" />
                <FormControlLabel value="incomplete" control={<Radio className="done-filter-input" />} label="Incomplete" />
              </RadioGroup>
            </>
          )}
          {isScreenNarrow && (
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              edge="end"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div style={{ width: 280, backgroundColor: '#333', minHeight: '100vh' }}>
          <TextField
            label="Search tasks..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <Box display="flex" alignItems="center">
                  <IconButton onClick={() => setSearchTerm('')} edge="end">
                    {searchTerm ? <ClearIcon /> : <SearchIcon />}
                  </IconButton>
                </Box>
              ),
            }}
            style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}
          />

          <RadioGroup
            aria-label="task-filter"
            name="task-filter"
            value={filterOption}
            onChange={(e) =>
              setFilterOption(e.target.value as 'all' | 'completed' | 'incomplete')
            }
            style={{ flexDirection: 'column', margin: '10px' }}
          >
            <FormControlLabel value="all" control={<Radio className="done-filter-input" />} label="All" />
            <FormControlLabel value="completed" control={<Radio className="done-filter-input" />} label="Complete" />
            <FormControlLabel value="incomplete" control={<Radio className="done-filter-input" />} label="Incomplete" />
          </RadioGroup>
        </div>
      </Drawer>
      <Container style={{ marginTop: '20px' }}>
        <TextField
          label="Type your task here..."
          variant="outlined"
          fullWidth
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTaskAdd()}
        />
        <Button
          id='addtask'
          variant="contained"
          color="primary"
          style={{ marginTop: '10px' }}
          onClick={handleTaskAdd}
        >
          Add Task
        </Button>
        <List style={{ marginTop: '20px' }}>
          {currentTasks.map(task => (
            <ListItem
              id='task'
              key={task.id}
              className={task.completed ? 'taskCompleted' : ''}
              style={{ wordWrap: 'break-word' }}
            >
              <ListItemText
                primary={task.content}
                secondary={`Created at: ${new Date(task.id).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}`}
                className="task-date"
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleTaskEdit(task.id, task.content)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="complete"
                  onClick={() => handleTaskToggleCompleted(task.id)}
                >
                  <CheckCircleOutlineIcon
                    color={task.completed ? 'primary' : 'inherit'}
                  />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleTaskDelete(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', marginTop: '10px' }}>
          <Button
            variant="outlined"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <Typography style={{ margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
        <Modal
          open={isModalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-title"
        >
          <Box id='modal' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: isScreenWide ? 600 : 300, bgcolor: 'background.paper', boxShadow: 24, p: 6 }}>
            <Typography id="modal-title" variant="h6" component="h2">
              Edit Task
            </Typography>
            <TextField
              fullWidth
              label="Edit task"
              variant="outlined"
              value={editingTask ? editingTask.content : ''}
              onChange={e => {
                setEditingTask({ ...editingTask!, content: e.target.value });
                if (e.target.value.trim() !== '') {
                  setValidationError('');
                }
              }}
              inputRef={editInputRef}
              error={validationError !== ''}
              helperText={validationError}
            />
            <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleTaskUpdate}>
              Save
            </Button>
          </Box>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
