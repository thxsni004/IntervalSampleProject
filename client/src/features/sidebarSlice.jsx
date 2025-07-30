import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:'sidebar',
    initialState:{
        open:false,
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.open=!state.open;
        },
        openSidebar:(state)=>{
            state.open=true;

        },
        closeSidebar:(state)=>{
            state.open=false;
        },
    },
});

export const {toggleSidebar,openSidebar,closeSidebar}=sidebarSlice.actions;
export default sidebarSlice.reducer;