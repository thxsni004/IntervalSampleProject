import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    countries:[],
    states:[],
    cities:[],
    selectedCountry:"",
    selectedState:"",
    selectedCity:"",
    loading:false,
    error:null,
};

// fetch countries

export const fetchCountries=createAsyncThunk(
    "location/fetchCountries",
    async()=>{
        const res= await axios.get("https://countriesnow.space/api/v0.1/countries/positions");
        return res.data.data.map((c)=>c.name)
    }

);

//fetch states

export const fetchStates= createAsyncThunk(
    "location/fetchState",
    async(country)=>{
        const res= await axios.post("https://countriesnow.space/api/v0.1/countries/states",{
        country,
        });

        return res.data.data.states.map((s)=>s.name);

    });

    // fetch cities

    export const fetchCities=createAsyncThunk(
        "location/fetchCities",
        async({country,state})=>{
            const res = await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities",{
                country,
                state,
            });
            return res.data.data;
        }
    );

    const locationSlice= createSlice({
        name:'location',
        initialState,
        reducers:{
            setSelectedCountry:(state,action)=>{
                state.selectedCountry =action.payload;
                state.selectedState="";
                state.selectedCity="";
                state.states=[];
                state.cities=[];
            },

            setSelectedState:(state,action)=>{
                state.selectedState=action.payload;
                state.selectedCity='';
                state.cities=[];
            },

            setSelectedCity:(state,action)=>{
                state.selectedCity=action.payload;
            },
        },
        extraReducers:(builder) =>{
            builder
            //  ==countries===
            .addCase(fetchCountries.pending,(state)=>{
                state.loading=true;
            })

            .addCase(fetchCountries.fulfilled,(state,action)=>{
                state.loading=false;
                state.countries=action.payload;
            })

            .addCase(fetchCountries.rejected,(state,action)=>{
                state.loading=false;
                state.error="Failed to fetch countries";
            })

            // state

            .addCase(fetchStates.pending,(state)=>{
                state.loading=true;
            })

            .addCase(fetchStates.fulfilled,(state,action)=>{
                state.loading=false;
                state.states=action.payload;

            })

            .addCase(fetchStates.rejected,(state,action)=>{
                state.loading=false;
                state.error="Failed to fetch States";
            })

            // cities

            .addCase(fetchCities.pending,(state)=>{
                state.loading=true;

            })
            .addCase(fetchCities.fulfilled,(state,action)=>{
                state.loading=false;
                state.cities=action.payload;
                
            })

            .addCase(fetchCities.rejected,(state,action)=>{
                state.loading=false;
                state.error='Failde to Fetch cities'
            });

        },
    });

    export const {setSelectedCountry,setSelectedState,setSelectedCity} =locationSlice.actions;
    export  default locationSlice.reducer;