import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { reduxImports } from '../redux/appExports';

interface ListComponentProps {
    tasksPerPage: number;
}

export default function ListComponent({ tasksPerPage }: ListComponentProps) {
    const filterOption = useSelector((state: RootState) => state.filterOptionsSlice.value);
    const filteredTasks = useSelector((state: RootState) => state.filterTasksSlice.value);
    const currentPage = useSelector((state: RootState) => state.currentPageSlice.value);
    const tasks = useSelector((state: RootState) => state.tasksSlice.value);

    const indexOfLastTask = currentPage * tasksPerPage;
    const indexOfFirstTask = indexOfLastTask - tasksPerPage;
    const dispatch = useDispatch();

    const handleTaskDelete = (id: number) => {
        const newTasks = tasks.filter(task => task.id !== id);
        dispatch(reduxImports.setTasks(newTasks));
    };

    const handleTaskEdit = (id: number, content: string) => {
        dispatch(reduxImports.setEditingTask({ id, content, completed: false }));
        dispatch(reduxImports.setIsModalOpen(true));
    };

    const handleTaskToggleCompleted = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        dispatch(reduxImports.setTasks(updatedTasks));
    };

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

    return (
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
    )
}
