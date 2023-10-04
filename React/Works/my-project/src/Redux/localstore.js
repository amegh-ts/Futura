import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'form',
  initialState: {
    formLocal: [],
  },
  reducers: {
    formdatas: (state, action) => {
      state.formLocal.push(action.payload);
      console.log(action.payload);
    },
  }
});

export const { formdatas } = user.actions;
export default user.reducer;
