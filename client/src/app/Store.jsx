import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/AuthSlice';
import dashboardReducer from '../features/DashboardSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard:dashboardReducer,

  },
});
