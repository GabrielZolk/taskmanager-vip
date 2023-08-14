import { createSlice } from '@reduxjs/toolkit';

const validationError = createSlice({
    name: 'validationError',
    initialState: {
      value: ''
    },
    reducers: {
        setValidationError: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setValidationError } = validationError.actions;
  export default validationError.reducer;