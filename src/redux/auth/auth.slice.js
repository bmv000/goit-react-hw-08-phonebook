import { createSlice } from '@reduxjs/toolkit';
import { authInitState } from './auth.init-state';
import { authLoginThunk, authLogoutThunk } from './auth.thunks';
import { getProfileThunk } from '../profile/profile.thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      //Log In
      .addCase(authLoginThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = 'fulfilled';
        state.data = payload;
      })
      .addCase(authLoginThunk.rejected, state => {
        state.status = 'rejected';
      })
      //Log Out
      .addCase(authLogoutThunk.pending, state => {
        state.status = 'loading';
      })
      .addCase(authLogoutThunk.fulfilled, state => {
        state.status = 'fulfilled';
        state.data = null;
      })
      .addCase(authLogoutThunk.rejected, state => {
        state.status = 'rejected';
      })
      .addCase(getProfileThunk.rejected, () => authInitState);
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['data'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
