import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "./reducers/auth.slice";

export const rootReducer = combineReducers({
    auth: authReducer
})