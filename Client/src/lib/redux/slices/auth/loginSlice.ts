import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface loginDesign {
    email : string,
    password : string
}

const initialState : loginDesign = {
    email : "",
    password : ""
}

const loginSlice = createSlice({
    name : "login",
    initialState,
    reducers : {
        setEmail : (state : loginDesign, action : PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword : (state : loginDesign, action : PayloadAction<string>) => {
            state.password = action.payload;
        }
    }
})

export default loginSlice.reducer

export const {setEmail , setPassword} = loginSlice.actions