import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    isAutentication: false
}

const authentication = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Loggedin(state) {
            state.isAutentication = true 
        },
        Loggedout(state, action) {
            state.isAutentication = false
        }    
    }
});

const store = configureStore({ reducer: authentication.reducer });

export const auth = authentication.actions;

export default store;


