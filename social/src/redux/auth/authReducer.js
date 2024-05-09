import {initialState} from "./initialState";
import {
    BIO_UPDATE_FAIL,
    BIO_UPDATE_SUCCESS, FRIEND_REQUEST_CONFIRM, FRIEND_REQUEST_SEND, GET_ALL_USER,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, PROFILE_PHOTO_UPLOAD,
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

        case PROFILE_PHOTO_UPLOAD:
            return{
                ...state,
                user: {
                    ...state.user,
                    profile_photo: payload
                }

            };

        case GET_ALL_USER:
            return{
                ...state,
                users: payload
            };

        case FRIEND_REQUEST_SEND:
            return{
                ...state,
                user:payload
            };

        case FRIEND_REQUEST_CONFIRM:
            return{
                ...state,
                user:payload
            };

        default :
            return state;
    }
}


export default authReducer;