import { combineReducers } from "@reduxjs/toolkit";

import tasklistReducer from "./reducers/tasklistSlice"

export const rootReducer = combineReducers({
    tasklist: tasklistReducer,
})