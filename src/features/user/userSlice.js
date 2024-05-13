import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addForm: (state, { payload }) => {
      state.users.push(payload);
    },
    dalateForm: (state, { payload }) => {
      state.users=state.users.filter((user) => user.id === payload);
    },
  },
});

export const { addForm } = userSlice.actions;

export default userSlice.reducer;
