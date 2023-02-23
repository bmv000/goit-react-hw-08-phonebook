




import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import { authLoginThunk, authLogoutThunk, register, fetchCurrentUser } from './auth.operations';
// import { getProfileThunk } from '../pro file/profile.thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      //       //Log In

      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      //       //Log Out
      .addCase(authLogoutThunk.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(authLogoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = 'rejected';
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isLoggedIn = false;
        state.token = null;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
