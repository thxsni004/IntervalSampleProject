// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const API_KEY = "de51026d9ff9544c5a57c66caa31053f"; // Replace with your OpenWeatherMap API key
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// export const fetchWeather = createAsyncThunk(
//   'weather/fetchWeather',
//   async (city) => {
//     const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
//     return response.data;
//   }
// );

// const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeather.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchWeather.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchWeather.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default weatherSlice.reducer;


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL="https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather=createAsyncThunk(
    'weather/fetchWeather',
    async(city)=>{
        const response=await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units-metric`);
        return response.data;
    }
);
  const  initialState={
        data:null,
        loading:false,
        error:null,
    }

const weatherSlice=createSlice({
    name:'weather',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchWeather.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchWeather.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        .addCase(fetchWeather.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        });
    },
});

export default weatherSlice.reducer;