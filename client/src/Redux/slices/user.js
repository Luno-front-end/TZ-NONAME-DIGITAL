import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser: (state) => {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
