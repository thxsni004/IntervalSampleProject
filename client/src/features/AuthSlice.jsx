import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react';

const BASE_URL="http://localhost:5000";

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/api/login`, {
    username,
    password,
  });
  return response.data;
});

export const registerUser = createAsyncThunk('auth/register', async ({ username, password }) => {
  const response = await axios.post(`${BASE_URL}/api/register`, {
    username,
    password,
  });
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading:false, //initially false 
    user: JSON.parse(localStorage.getItem('user'))||{}, //empty object
    status: 'idle',
    error: null,
  },
  reducers: {
    logout:(state)=>{
      state.user={};
      state.status='idle';
      state.loading=false;
      localStorage.removeItem('user');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;  //pending state 
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
          state.loading = false;
          state.status='succeeded';
          localStorage.setItem('user',JSON.stringify(action.payload));
      })

      .addCase(login.rejected,(state,action)=>{
        state.loading=false;
        state.status='failed';
        state.error=action.error.message;
      })

      .addCase(registerUser.pending,(state)=>{
        state.loading=true;
      })

      .addCase(registerUser.fulfilled,(state,action)=>{
        state.user=action.payload;
        state.loading=false;
        state.status='succeeded';
      })
      .addCase(registerUser.rejected,(state,action)=>{
        state.loading=false;
        state.status='failed';
        state.error=action.error.message;
      });
  },
});

export const {logout}=authSlice.actions;

export default authSlice.reducer;
