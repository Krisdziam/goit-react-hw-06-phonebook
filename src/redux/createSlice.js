import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const createSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    removeContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["items"],
  };

