import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { login, logout } from "./api"

export const loginUser = createAsyncThunk("auth/login", async ({ login: username, password }, { rejectWithValue }) => {
  try {
    const data = await login({ login: username, password })
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("accessToken"),
    status: "idle",
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      logout()
      state.isAuthenticated = false
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading"
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.isAuthenticated = true
        localStorage.setItem("accessToken", action.payload.accessToken)
        localStorage.setItem("expire", action.payload.expire)
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.payload
      })
  },
})

export const { logoutUser } = authSlice.actions
export default authSlice.reducer
