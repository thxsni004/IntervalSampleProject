import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import dashboardReducer from "./features/DashboardSlice";
import userReducer from "./features/userSlice";
import sidebarReducer from "./features/sidebarSlice";
import formReducer from "./features/formSlice";
import weatherReducer from "./features/watherSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    users: userReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    weather: weatherReducer,
  },
});
