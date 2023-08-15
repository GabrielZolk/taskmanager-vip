import {
    TextField,
  } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { reduxImports } from '../redux/appExports';

interface TaskInputProps {
    handleTaskAdd: () => void;
  }

export default function TaskInput({handleTaskAdd}: TaskInputProps) {
    const taskInput = useSelector((state: RootState) => state.taskInputSlice.value);

    const dispatch = useDispatch();

    return (
        <TextField
            label="Type your task here..."
            variant="outlined"
            fullWidth
            value={taskInput}
            onChange={(e) => dispatch(reduxImports.setTaskInput(e.target.value))}
            onKeyDown={(e) => e.key === 'Enter' && handleTaskAdd()}
        />
    )
}
