import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



export const store = configureStore({
  reducer: {},
})