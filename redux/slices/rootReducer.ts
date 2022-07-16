import { combineReducers } from "@reduxjs/toolkit";
import {localeSlice} from "./localeSlice";
import {translationsSlice} from "./translationsSlice";
import {bootStrappedSlice} from "./bootStrappedSlice";
import {authSlice} from "./authSlice";

export const rootReducer = combineReducers({
    locale : localeSlice.reducer,
    translations : translationsSlice.reducer,
    bootStrapped : bootStrappedSlice.reducer,
    auth : authSlice.reducer
});
