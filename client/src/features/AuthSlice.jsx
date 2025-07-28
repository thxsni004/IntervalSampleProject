import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
    user: {}, //empty object
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;  //pending state 
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
          state.loading = false;
      });
  },
});

export default authSlice.reducer;
