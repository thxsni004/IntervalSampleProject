import { createSlice } from "@reduxjs/toolkit";

const formSlice=createSlice({
    name:'form',
    initialState:{
        submissions:[], //already existing part
        personalInfo:{
            name:"",
            email:"",
        },
        address:{
            street:"",
            city:"",
            zip:"",
        },
        submitted:false,   //for snackbar
    },
    reducers:{
        addSubmission:(state,action)=>{
            state.submissions.push(action.payload);
        },
        clearSubmissions:(state)=>{
            state.submissions=[];
        },



        savePersonalInfo:(state,action)=>{
            state.personalInfo=action.payload;
        },
        saveAddress:(state,action)=>{
            state.address=action.payload;
        },
        submitForm:(state)=>{
            state.submissions.push({
                personalInfo:state.personalInfo,
                address:state.address,
            })
            state.submitted=true;
        },
        resetForm:(state)=> {
            state.personalInfo={ name:"",email:""};
            state.address={street:"",city:"",zip:""};
            state.submitted=false;

        }


    },
});

export const {addSubmission,clearSubmissions,savePersonalInfo,saveAddress,submitForm,resetForm} = formSlice.actions;
export default formSlice.reducer;