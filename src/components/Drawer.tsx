import { Drawer, TextField, Box, IconButton } from "@mui/material";
import { reduxImports } from "../redux/appExports";
import { useDispatch, useSelector } from "react-redux";

import TaskFilterComponent from "./TaskFilter";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { RootState } from "../redux";

export default function DrawerComponent() {
    const isMenuOpen = useSelector((state: RootState) => state.menuSlice.value);
    const searchTerm = useSelector((state: RootState) => state.searchTermSlice.value);

    const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={isMenuOpen} onClose={() => dispatch(reduxImports.setIsMenuOpen(false))}>
        <div style={{ width: 280, backgroundColor: '#333', minHeight: '100vh' }}>
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
            style={{ margin: '10px', display: 'flex', justifyContent: 'center' }}
          />

          <TaskFilterComponent style={{ flexDirection: 'column' }} />
        </div>
      </Drawer>
  )
}
