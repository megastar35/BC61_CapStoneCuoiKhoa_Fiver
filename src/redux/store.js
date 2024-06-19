import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slice/userSlice';
import workReducer from './slice/workSlice'; // khi import đổi tên là workReducer

export const store = configureStore({
  reducer: {
    work: workReducer,
    userSlice,
  },
});
