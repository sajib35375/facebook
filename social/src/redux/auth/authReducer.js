import {initialState} from "./initialState";
import {
    BIO_UPDATE_FAIL,
    BIO_UPDATE_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS, TOKEN_USER_FAIL, TOKEN_USER_REQ, TOKEN_USER_SUCCESS, USER_LOGOUT
} from "./ActionType";


const authReducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case REGISTER_REQUEST:
            return{
                ...state,
                loadingState : true,
                message : payload
            };
        case REGISTER_SUCCESS:
            return{
                ...state,
                loadingState : false
            };

        case REGISTER_FAIL:
            return{
                ...state,
                loadingState : false
            };

        case LOGIN_REQUEST:
            return{
                ...state,
                user: null,
                loginState : false
            };

        case LOGIN_SUCCESS:
            return{
                ...state,
                user: payload,
                loginState : true
            };


        case LOGIN_FAIL:
            return{
                ...state,
                user: null,
                loginState : false
            };

        case TOKEN_USER_SUCCESS:
            return{
                ...state,
                user: payload,
                loginState : true
            };

        case TOKEN_USER_FAIL:
            return{
                ...state,
                user: null,
                loginState : false
            };

        case USER_LOGOUT:
            return{
                ...state,
                user: null,
                loginState : false
            };

        case BIO_UPDATE_SUCCESS:
            return{
                ...state,
                user: {
                    ...payload
                }

            };

        case BIO_UPDATE_FAIL:
            return{
                ...state,
                user: null

            };

        default :
            return state;
    }
}


export default authReducer;