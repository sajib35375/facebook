import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk} from "redux-thunk";


const middleware = [thunk];


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))