import { Box, Button, Modal, TextField, Typography, useMediaQuery } from '@mui/material';
import { reduxImports } from '../redux/appExports';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { useRef } from 'react';

export default function ModalComponent() {
    const isModalOpen = useSelector((state: RootState) => state.modalSlice.value);
    const validationError = useSelector((state: RootState) => state.validationErrorSlice.value);
    const editingTask = useSelector((state: RootState) => state.editingTaskSlice.value);
    const editInputRef = useRef<HTMLInputElement | null>(null);
    const tasks = useSelector((state: RootState) => state.tasksSlice.value);

    const dispatch = useDispatch();
    const isScreenWide = useMediaQuery('(min-width:1141px)');
    
    const handleModalClose = () => {
        dispatch(reduxImports.setIsModalOpen(false));
        dispatch(reduxImports.setEditingTask(null));
      };
    
      const handleTaskUpdate = () => {
        if (editingTask && editingTask.content.trim() === '') {
          dispatch(reduxImports.setValidationError('Task cannot be empty'));
          return;
        }
    
        const updatedTasks = tasks.map(task =>
          task.id === editingTask?.id ? { ...task, content: editingTask.content } : task
        );
        dispatch(reduxImports.setTasks(updatedTasks));
        handleModalClose();
        dispatch(reduxImports.setValidationError(''));
      };

    return (
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
                        dispatch(reduxImports.setEditingTask({ ...editingTask!, content: e.target.value }));
                        if (e.target.value.trim() !== '') {
                            dispatch(reduxImports.setValidationError(''));
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
    )
}
