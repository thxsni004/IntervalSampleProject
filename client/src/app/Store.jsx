import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/AuthSlice';
import dashboardReducer from '../features/DashboardSlice'
import userReducer from "../features/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard:dashboardReducer,
    users: userReducer,

  },
});
