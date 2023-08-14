import { useState, useRef } from 'react';
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
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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

  const editInputRef = useRef<HTMLInputElement | null>(null);
  const tasksPerPage = 5;

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = tasks.length > 0 ? Math.ceil(tasks.length / tasksPerPage) : 1;

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
    if (editingTask) {
      const updatedTasks = tasks.map(task =>
        task.id === editingTask.id ? { ...task, content: editingTask.content } : task
      );
      setTasks(updatedTasks);
      handleModalClose();
    }
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
        </Toolbar>
      </AppBar>
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
            >
              <ListItemText primary={task.content} />
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
          <Box id='modal' sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, bgcolor: 'background.paper', boxShadow: 24, p: 6 }}>
            <Typography id="modal-title" variant="h6" component="h2">
              Edit Task
            </Typography>
            <TextField
              fullWidth
              label="Edit task"
              variant="outlined"
              value={editingTask ? editingTask.content : ''}
              onChange={e => setEditingTask({ ...editingTask!, content: e.target.value })}
              inputRef={editInputRef}
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
