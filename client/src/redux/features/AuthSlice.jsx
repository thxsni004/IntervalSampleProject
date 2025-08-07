import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import request from '../../api/Request';

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await request.post(`/api/login`, {
    username,
    password,
  });
  return response.data;
});

export const registerUser = createAsyncThunk('auth/register', async ({ username, password },{rejectWithValue}) => {
  try{
      const response = await request.post(`/api/register`, {
    username,
    password,
  });
    return response.data;

  } catch(err){
    return rejectWithValue(err.response.data.message||'registration failed')
  }


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
