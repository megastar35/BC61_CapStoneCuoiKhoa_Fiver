import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:null
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        handleGetValue:(state,aciton)=>{
            state.user=aciton.payload;
        }
    }
})
export const {handleGetValue}=userSlice.actions;
export default userSlice.reducer;