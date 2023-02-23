
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


//GET
export const fetchContacts = createAsyncThunk(
  'tasks/fetchAll',
 
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      
      return data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//POST
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

//DELETE
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


// import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as contactsAPI from '../../services/contacts-api';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (newContact, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.addContact(newContact);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsAPI.deleteContact(contactId);
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );



