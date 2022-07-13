import { combineReducers } from "@reduxjs/toolkit";

import {usersSlice} from "./usersSlice";
import {localeSlice} from "./localeSlice";
import {translationsSlice} from "./translationsSlice";
import {bootStrappedSlice} from "./bootStrappedSlice";

export const rootReducer = combineReducers({
    users : usersSlice.reducer,
    locale : localeSlice.reducer,
    translations : translationsSlice.reducer,
    bootStrapped : bootStrappedSlice.reducer
});
