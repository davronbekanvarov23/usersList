import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isOpen: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addForm: (state, { payload }) => {
      state.users.push(payload);
    },
    dalateForm: (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    },
    openModal: (state, { payload }) => {
      state.isOpen = true;
    },
    closeModal: (state, { payload }) => {
      state.isOpen = false;
    },
  },
});

export const { addForm, dalateForm, openModal, closeModal } = userSlice.actions;

export default userSlice.reducer;
