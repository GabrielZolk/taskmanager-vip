import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { reduxImports } from '../redux/appExports';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

interface TaskFilterComponentProps {
  style?: React.CSSProperties;
}

const TaskFilterComponent: React.FC<TaskFilterComponentProps> = ({ style }) => {
  const filterOption = useSelector((state: RootState) => state.filterOptionsSlice.value);
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(reduxImports.setFilterOption(event.target.value as 'all' | 'completed' | 'incomplete'));
  };

  return (
    <RadioGroup
      aria-label="task-filter"
      name="task-filter"
      value={filterOption}
      onChange={handleFilterChange}
      style={{ flexDirection: style?.flexDirection }}
    >
      <FormControlLabel value="all" control={<Radio className="done-filter-input" />} label="Todos" />
      <FormControlLabel value="completed" control={<Radio className="done-filter-input" />} label="Completos" />
      <FormControlLabel value="incomplete" control={<Radio className="done-filter-input" />} label="Incompletos" />
    </RadioGroup>
  );
};

export default TaskFilterComponent;
