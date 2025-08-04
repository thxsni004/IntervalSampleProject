import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDashboardData = createAsyncThunk(
  'dashboard/fetchData',
  async (token) => {
    const res = await axios.get('/api/dashboard', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }
);


const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    message: '',
    loading: false,
    error: null,
  },
    extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
       
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;