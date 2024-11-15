import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "./reducer";

const rootReducer = combineReducers({
  data: usersReducer,
});

export default rootReducer;
