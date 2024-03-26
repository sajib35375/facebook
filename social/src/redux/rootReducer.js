import {combineReducers} from "redux";
import authReducer from "./auth/authReducer";
import loaderReducer from "./topLoader/loaderReducer";


export const rootReducer = combineReducers({
    auth : authReducer,
    loader : loaderReducer
})