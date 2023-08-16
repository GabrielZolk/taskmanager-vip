import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import {
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Box,
  useMediaQuery,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import { reduxImports } from "../redux/appExports";
import TaskFilterComponent from "./TaskFilter";

export default function ToolbarComponent() {
  const isMenuOpen = useSelector((state: RootState) => state.menuSlice.value);
  const searchTerm = useSelector((state: RootState) => state.searchTermSlice.value);

  const isScreenWide = useMediaQuery('(min-width:1141px)');
  const isScreenNarrow = useMediaQuery('(max-width:1140px)');

  const dispatch = useDispatch();

  return (
    <Toolbar id="toolbar">
      <Typography variant="h6">Task Manager</Typography>
      {isScreenWide && (
        <>
          <TextField
            label="Search tasks..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => dispatch(reduxImports.setSearchTerm(e.target.value))}
            InputProps={{
              endAdornment: (
                <Box display="flex" alignItems="center">
                  <IconButton onClick={() => dispatch(reduxImports.setSearchTerm(''))} edge="end">
                    {searchTerm ? <ClearIcon /> : <SearchIcon />}
                  </IconButton>
                </Box>
              ),
            }}
            style={{ margin: '10px' }}
          />
          <TaskFilterComponent style={{ flexDirection: 'row' }} />
        </>
      )}
      {isScreenNarrow && (
        <IconButton
          onClick={() => dispatch(reduxImports.setIsMenuOpen(!isMenuOpen))}
          edge="end"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      )}
    </Toolbar>
  )
}
