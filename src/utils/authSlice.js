import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from './api';

const initialState = {
  isAuthenticated: localStorage.getItem('accessToken') !== null,
  user: null,
  accessToken: localStorage.getItem('accessToken') || null,
  expire: localStorage.getItem('expire') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.expire = action.payload.expire;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      state.expire = null;
    },
  },
});

// Асинхронное действие для авторизации
export const loginUser = (email, password) => async (dispatch) => {
  try {
    const data = await login(email, password);

    // Сохраняем токен и дату истечения в localStorage
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('expire', data.expire);

    // Обновляем состояние
    dispatch(setAuth({ user: { email }, accessToken: data.accessToken, expire: data.expire }));
  } catch (error) {
    throw error;
  }
};

// Асинхронное действие для выхода
export const logoutUser = () => async (dispatch) => {
  await logout();
  dispatch(clearAuth());
};

export const { setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
