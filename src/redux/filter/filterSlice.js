import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,

  reducers: {
    filterList(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { filterList } = filterSlice.actions;
