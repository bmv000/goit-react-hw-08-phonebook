import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import {
  authLoginThunk,
  authLogoutThunk,
  register,
  fetchCurrentUser,
} from './auth.operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, _) => state)
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      //       //Log In
      .addCase(authLoginThunk.pending, (state, _) => state)
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authLoginThunk.rejected, (state, _) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      //       //Log Out
      .addCase(authLogoutThunk.pending, (state, _) => {
        state.isRefreshing = true;
      })

      .addCase(authLogoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
      })

      .addCase(fetchCurrentUser.pending, state => {
        // state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        // state.isLoggedIn = false;
        // state.token = null;
        state.isRefreshing = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
