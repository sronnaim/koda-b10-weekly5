import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    login: (_, { payload }) => payload,
    logout: () => null
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
