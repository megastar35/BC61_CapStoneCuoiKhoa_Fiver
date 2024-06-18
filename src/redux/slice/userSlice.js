import { createSlice } from "@reduxjs/toolkit";
import { handleGetValueLocalStore } from "../../utils/utils";
const initialState={
     user:handleGetValueLocalStore('dataUser')
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