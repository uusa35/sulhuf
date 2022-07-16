import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Auth} from "../../types";
import Cookies from 'js-cookie'

const initialState: Auth = {
    id: '',
    email: '',
    username: '',
    password: '',
    isLogged : false
}

// HERE IS THE STATE OF USERS
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUser: (state: typeof initialState, action: PayloadAction<Auth>) => {
        },
        setUser: (state: typeof initialState, action: PayloadAction<Auth>) => {
            // STATE OF auth
            return {
                ...action.payload,
            }
        },
        logout: (state: typeof initialState, action: PayloadAction<any>) => {
            return {
                ...initialState
            }
        }
    }
})

export const {getUser, setUser, logout} = authSlice.actions;
