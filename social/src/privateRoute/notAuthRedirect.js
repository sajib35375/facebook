import React from 'react';
import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";
import Cookies from "js-cookie";

const NotAuthRedirect = () => {
    const {loginState} = useSelector(state=>state.auth)

    const authToken = Cookies.get('authToken');

    return loginState ? <Navigate to="/" /> : <Outlet />;

};

export default NotAuthRedirect;