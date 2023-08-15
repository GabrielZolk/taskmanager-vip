import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import {
    Typography,
    Button,
  } from '@mui/material';
import { reduxImports } from "../redux/appExports";

interface ListComponentProps {
    tasksPerPage: number;
}

export default function PagesComponent({ tasksPerPage }: ListComponentProps) {
    const filteredTasks = useSelector((state: RootState) => state.filterTasksSlice.value);
    const currentPage = useSelector((state: RootState) => state.currentPageSlice.value);

    const totalPages = filteredTasks.length > 0 ? Math.ceil(filteredTasks.length / tasksPerPage) : 1;

    const dispatch = useDispatch();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', marginTop: '10px' }}>
          <Button
            variant="outlined"
            disabled={currentPage === 1}
            onClick={() => dispatch(reduxImports.setCurrentPage(currentPage - 1))}
          >
            Previous
          </Button>
          <Typography style={{ margin: '0 10px' }}>
            Page {currentPage} of {totalPages}
          </Typography>
          <Button
            variant="outlined"
            disabled={currentPage === totalPages}
            onClick={() => dispatch(reduxImports.setCurrentPage(currentPage + 1))}
          >
            Next
          </Button>
        </div>
  )
}
