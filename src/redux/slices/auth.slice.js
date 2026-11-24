import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  reducers: {
    login: (_, { payload }) => payload,
    logout: () => null,
    refresh: (prev) => ({ ...prev })
  }
})

export const { login, logout, refresh } = authSlice.actions
export default authSlice.reducer
