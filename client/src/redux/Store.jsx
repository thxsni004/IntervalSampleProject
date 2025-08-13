import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import dashboardReducer from "./features/DashboardSlice";
import userReducer from "./features/userSlice";
import sidebarReducer from "./features/sidebarSlice";
import formReducer from "./features/formSlice";
import weatherReducer from "./features/watherSlice";
import uploadReducer from "./features/UploadSlice"
import dragDropReducer from './features/dragDropSlice'
import cartReducer from './features/CartSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    users: userReducer,
    sidebar: sidebarReducer,
    form: formReducer,
    weather: weatherReducer,
      upload: uploadReducer,
      dragDrop:dragDropReducer,
      cart:cartReducer,
      
 
  },
  
});
// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // ignore errors
  }
};

// Subscribe to store changes to save the state
store.subscribe(() => {
  saveState(store.getState());
});