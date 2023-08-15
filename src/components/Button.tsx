import {
    Button,
} from '@mui/material';

interface ButtonComponentProps {
    handleTaskAdd: () => void;
    label: string;
  }

export default function ButtonComponent({ label, handleTaskAdd }: ButtonComponentProps) {
    return (
        <Button
            id='addtask'
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
            onClick={handleTaskAdd}
        >
            {label}
        </Button>
    )
}
