import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contactsList: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    createContact(state, { payload }) {
      state.contactsList.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  // whitelist: ['contacts'],
};

// Генератор
export const { createContact, deleteContact } = contactsSlice.actions;

// Редюсер
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
