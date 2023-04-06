import { createSlice } from "@reduxjs/toolkit";


// Get the current date
let currentDate = new Date();

// Add seven days
let nextWeek = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));

const currentDateGet = currentDate.toLocaleDateString();
const nextWeekDateGet =  nextWeek.toLocaleDateString();
 

const initialState = {
    getDataTimeFrame : [{
        from : currentDateGet,
        to : nextWeekDateGet
    }],
    getDataTimeInterval : [{
        from : currentDateGet,
        to : nextWeekDateGet
    }]
}

const dateSlice = createSlice({
    name : "dateSlice",
    initialState,
    reducers : {
        getDateTimeFrame : (state,action)=>{
            state.getDataTimeFrame = action.payload
        },
        getDateTimeInterval : (state,action)=>{
            state.getDataTimeInterval = action.payload
        },
    }
});

export const { getDateTimeFrame,getDateTimeInterval } = dateSlice.actions;
export default dateSlice.reducer;