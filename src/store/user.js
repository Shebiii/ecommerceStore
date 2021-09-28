import { createSlice } from "@reduxjs/toolkit";
import { Redirect } from "react-router-dom";

const userValidation = createSlice({
    name: 'user',
    initialState: {
        userLoggedin: false ,
        userDetail: [],
    },
    reducers: {
        login(state,action) {
            const userinfo = action.payload
            if(userinfo.username === "shoaib" && userinfo.password === "1234"){
            state.userLoggedin = true;
            localStorage.setItem("username","username");
                
        }else {

            alert("no record found please try again")
        }
        },
        
        logout(state) {
            state.userLoggedin = false;
            localStorage.removeItem("username")
        },

        Adduser(state, action) {
            const userinfo = action.payload
            if(userinfo.FullName !== undefined){
            state.userDetail.push({
            FullName: userinfo.FullName,
            username: userinfo.username,
            Email:userinfo.Email,
            password: userinfo.password,
            confirmPassword: userinfo.confirmPassword,
            });
                
            }
            else {
                console.log("enter something")
            }
        
        
        }
        }
}
)

export const userAction = userValidation.actions;
export default userValidation;
