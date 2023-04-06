import { createSlice } from "@reduxjs/toolkit";
import { baseURL } from "config/endpoint";
import {INSTANCE} from "../config/axiosInstance";
import axios from "axios";


const initialState = {
   loader : false,
   data : [],
   error : false
  };

  const AutomationSlice = createSlice({
    name : "AutomationSlice",
    initialState:initialState,
    reducers : {
       createAutomation :  (state,payload)=>{
    
       }
    }
  });

  export const { createAutomation } = AutomationSlice.actions;
  export default AutomationSlice.reducer;

