import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherData } from "../../api/Weather";



export const fetchWeather=createAsyncThunk(
    'weather/fetchWeather',
    async(city)=>{
        const response=await fetchWeatherData(city);
        return response;
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