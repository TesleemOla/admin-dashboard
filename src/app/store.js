import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/admin/adminSlice'

export const store = configureStore({
  reducer: { 
    users: userReducer,
  },
});
