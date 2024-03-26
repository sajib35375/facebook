import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";

const AuthRedirect = () => {
    const {loginState} = useSelector(state=>state.auth)
    const authToken = Cookies.get('authToken');

    return loginState ? <Outlet /> : <Navigate to="/auth" />;
};



export default AuthRedirect;