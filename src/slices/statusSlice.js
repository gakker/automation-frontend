import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   status : "pause",
   frequency : "%",
   doTabs : ""
  };
  
const statusSlice = createSlice({
    name : "statusSlice",
    initialState,
    reducers : {
        getCurrentStatus : (state,action)=>{
          if(action.payload === "€" || action.payload === "%" ){
            state.frequency = action.payload;
          }
           if(action.payload === "active" || action.payload === "pause" ){
            state.status = action.payload;
           }
          if(action.payload.includes("ONCE")){
            state.doTabs = action.payload;
          }
        }   
    }
});

export const {getCurrentStatus} = statusSlice.actions;
export default statusSlice.reducer;