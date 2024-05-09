import axios from "axios";
import {notifyError, notifySuccess} from "../../utility/Toast";
import Cookies from "js-cookie";
import {
    BIO_UPDATE_FAIL,
    BIO_UPDATE_SUCCESS, FRIEND_REQUEST_CONFIRM, FRIEND_REQUEST_SEND, GET_ALL_USER,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, PROFILE_PHOTO_UPLOAD,
    TOKEN_USER_FAIL,
    TOKEN_USER_REQ,
    TOKEN_USER_SUCCESS, USER_LOGOUT
} from "./ActionType";
import {LOADER_END, LOADER_START} from "../topLoader/loaderActionType";


export const registerSuccess = (data, e, setInput, setShow, navigate) => async (dispatch) => {
    try{


        await axios.post('/api/v1/user/',data).then((res)=>{
            notifySuccess('User Registration successful')
            e.target.reset();
            setInput({
                first_name : '',
                sur_name : '',
                mobileOrEmail : '',
                password : '',
                date : '',
                month: '',
                year : '',
                gender: ''
            });
            setShow(false)
            navigate("/activation/account")
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })


    }catch (error) {
        notifyError(error.response.data.message)
    }
}

export const acctountActivation = (data, navigate, email)=> async (dispatch) => {
    try{

        await axios.post('/api/v1/user/activation-code/',{
            code:data,
            email:email
        }).then((res)=>{
            notifySuccess('Account Activation successful')
            navigate("/auth")
            Cookies.remove('otp')
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.message)
    }
}

export const resetLinkSend = (data) => async (dispatch) => {
    try{
        await axios.post('/api/v1/user/activation-resent-link',data).then((res)=>{
            notifySuccess("reset link send")
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })
    }catch (error) {
        notifyError(error.message)
    }
}

export const checkForgotPasswordByCode = (data, navigate) => async (dispatch) => {
    try{

       await axios.post('/api/v1/user/check-forgot-password-link/',{
           auth: data.auth,
           code: data.code
       }).then((res)=>{
           notifySuccess(res.data.message);
           navigate("/change-password")
       }).catch((error)=>{
           notifyError(error.response.data.message)
       })

    }catch (error) {
        notifyError(error.response.data.message)
    }
}

export const changePassword = (id, password, navigate) => async (dispatch) => {
    try{

        await axios.post('/api/v1/user/change-forgot-password/',{
            id : id,
            password:password
        }).then(res=>{
            notifySuccess(res.data.message)
            navigate("/auth")
            Cookies.remove('userId');
            Cookies.remove('pass-code');
            Cookies.remove('findUser');
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.response.data.message)
    }
}


export const userLogin = (data, navigate) => async (dispatch) => {
    try{

        dispatch({
            type: LOGIN_REQUEST
        })
        await axios.post('/api/v1/user/login/',{
            auth: data.auth,
            password: data.password
        }).then(res=>{
            dispatch({
                type:LOGIN_SUCCESS,
                payload:res.data.user
            })
            dispatch({
                type : LOADER_START
            })
            notifySuccess(res.data.message)
            navigate('/')
        }).catch(error=>{
            dispatch({
                type: LOGIN_FAIL,
                payload: null
            })
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.response.data.message)
    }
}


export const tokenUserLogin = (navigate) => async (dispatch) => {
    const token = Cookies.get('authToken');
    try{
        dispatch({
            type: TOKEN_USER_REQ
        })
        await axios.get('/api/v1/user/me/',{
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        }).then(res=>{
            dispatch({
                type:TOKEN_USER_SUCCESS,
                payload:res.data.user
            })
            navigate("/")
        }).catch(error=>{
            dispatch({
                type:TOKEN_USER_FAIL
            })
            navigate("/auth")
        })

    }catch (error) {
        dispatch({
            type:TOKEN_USER_FAIL
        })
        navigate("/auth")
    }
}


export const userLogout = () => async (dispatch) => {
    try{

        dispatch({
            type:LOADER_START
        })

        await axios.post('/api/v1/user/logout/').then(res=>{
            notifySuccess(res.data.message)
            dispatch({
                type: USER_LOGOUT
            });
            Cookies.remove('authToken')
            dispatch({
                type:LOADER_END
            })
        }).catch(error=>{
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.response.data.message)
    }
}



export const profileBioUpdate = (data, id, setBioShow) => async (dispatch) => {
    try{

        await axios.put(`/api/v1/user/profile/profile-update/${id}`,data).then(res=>{
            notifySuccess(res.data.message)
            setBioShow(false)
            dispatch({
                type : BIO_UPDATE_SUCCESS,
                payload: res.data.user
            })
        }).catch(error=>{
            notifyError(error.response.data.message)
            dispatch({
                type: BIO_UPDATE_FAIL
            })
        })

    }catch (error) {
        notifyError(error.response.data.message)
        dispatch({
            type: BIO_UPDATE_FAIL
        })
    }
}


export const featuredPhotos = (data, id) => async (dispatch) => {
    try{

        await axios.post(`/api/v1/user/profile/featured-photo-update/${id}`, data,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res)=>{
            notifySuccess(res.data.message)
        }).catch((error)=>{
            notifyError('Featured Photo Upload Fail')
        })

    }catch (error) {
        notifyError('axios error')
    }
}


export const profilePhoto = (id, data) => async(dispatch) => {
    try{

        await axios.put(`/api/v1/user/profile/profile-photo-update/${id}`, data).then((res)=>{
            notifySuccess(res.data.message)
            dispatch({
                type:PROFILE_PHOTO_UPLOAD,
                payload:res.data.fileName
            })
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.message)
    }
}


export const getAllUser = (id) => async (dispatch) => {
    try{

        await axios.get(`/api/v1/user/${id}`).then((res)=>{

            dispatch({
                type: GET_ALL_USER,
                payload: res.data.users
            })

        }).catch((error)=>{
            notifyError(error.response.data.message)
        })

    }catch (error) {
        notifyError(error.response.data.message)
    }
}


export const friendRequestSend = (senderId, receiverId) => async (dispatch) => {
    try{

        await axios.get(`/api/v1/user/add-friend/${senderId}/${receiverId}`).then((res)=>{
            notifySuccess(res.data.message)
            dispatch({
                type:FRIEND_REQUEST_SEND,
                payload: res.data.sender
            })
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })
    }catch (error) {
        notifyError(error.message)
    }
}


export const friendRequestConfirm = (senderId, receiverId) => async (dispatch) => {
    try{

        await axios.get(`/api/v1/user/confirm-friend-request/${senderId}/${receiverId}`).then((res)=>{
            notifySuccess(res.data.message)
            dispatch({
                type:FRIEND_REQUEST_CONFIRM,
                payload: res.data.user
            })
        }).catch((error)=>{
            notifyError(error.response.data.message)
        })
    }catch (error) {
        notifyError(error.message)
    }
}








