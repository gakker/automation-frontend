import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
   loader : false,
   data : [],
   error : false
}


const campaignSlices = createSlice({
    name : "currentTabSlice",
    initialState,
    reducers : {
      setLoaderCampaign : (state,action)=>{
        state.loader = action.payload
      
      },
      setDataCampaign : (state,action)=>{
      state.data = action.payload;
    
      },
      setErrorCampaign : (state,action)=>{
        state.error = action.payload
      }
    }
});

export const { setLoaderCampaign, setDataCampaign, setErrorCampaign } = campaignSlices.actions;
export default campaignSlices.reducer;


export const getCampaignAPi = ()=> async (dispatch)=>{
    try{
        dispatch(setLoaderCampaign(true));
        const res = await axios({
            method : "get",
            url : "https://dummyjson.com/products"
        });
        console.log(res)
        dispatch(setLoaderCampaign(false));
        dispatch(setDataCampaign(res.data))
    }
    catch(error){
        dispatch(setLoaderCampaign(false));
        dispatch(setErrorCampaign(err))
    }
}