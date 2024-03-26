import React, {useEffect, useState} from 'react';
import ForgotPassword from "./forgotPassword";
import logo from "../../assets/images/forgotLogo.png";
import {AiTwotonePlusSquare} from "react-icons/ai";
import {Link, useNavigate, useParams} from "react-router-dom";
import cookie from 'js-cookie';
import {useDispatch} from "react-redux";
import {acctountActivation, checkForgotPasswordByCode, resetLinkSend} from "../../redux/auth/AuthAction";
import axios from "axios";
import {notifyError, notifySuccess} from "../../utility/Toast";

const Activation = () => {
    const dispatch = useDispatch();
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const {type} = useParams();

    const auth = cookie.get('otp');
    const pass = cookie.get('pass-code');



    useEffect(() => {
        if (!auth && !pass){
            navigate("/auth")
        }
    }, []);

    const handleActivateCancel = (e) => {
        e.preventDefault();
        navigate("/auth");
        cookie.remove('otp');
    }

    const handleResetLink = async (e) => {
        e.preventDefault();

       dispatch(resetLinkSend({auth:auth}))

    }

    const handleActivation = (e) => {
        e.preventDefault();

        if (!code){
            notifyError('Activation code is required')
        }else{
            dispatch(acctountActivation(code, navigate, auth))
        }

    }

    const handlePasswordReset = (e) => {
        e.preventDefault();

        if (!code){
            notifyError('Code must be needed')
        }else{
            dispatch(checkForgotPasswordByCode({
                auth: pass,
                code: code
            }, navigate))
        }
    }



    return (
        <>
            <div className="topBarContainer">
                <div className="topBarWrapper">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="loginArea">
                        <input placeholder="Email or phone" type="text"/>
                        <input placeholder="Password" type="password"/>
                        <button>Log in</button>
                        <a href="">Forgotten account?</a>
                    </div>
                </div>
            </div>
            <div className="mainBodyContainer">
                <div className="mainBodyWrapper">
                    <div className="card cardContainer">
                        <div className="card-body">
                            <h2>Enter security code</h2>
                            <hr/>
                            <p>We send your security code in <strong>{auth}</strong></p>
                            <input name="code" onChange={(e)=>setCode(e.target.value)} placeholder="Security code" type="text"/>
                            <hr/>
                            <div className="link">
                                <a onClick={handleResetLink} href="">Don't have an link?</a>
                            </div>
                            <div className="button">
                                <Link onClick={handleActivateCancel} className="cancel">Cancel</Link>
                                <Link onClick={ type=== 'reset' ? handlePasswordReset : handleActivation } className="search">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="authFooterContent">
                <ul className="topPart">
                    <li><a href="#">English (UK)</a></li>
                    <li><a href="#">বাংলা</a></li>
                    <li><a href="#">অসমীয়া</a></li>
                    <li><a href="#">हिन्दी</a></li>
                    <li><a href="#">नेपाली</a></li>
                    <li><a href="#">Bahasa Indonesia</a></li>
                    <li><a href="#">العربية</a></li>
                    <li><a href="#">中文(简体)</a></li>
                    <li><a href="#">Bahasa Melayu</a></li>
                    <li><a href="#">Español</a></li>
                    <li><a href="#">Português (Brasil)</a></li>
                    <li><AiTwotonePlusSquare id="btn"/></li>
                </ul>
                <div className="underline"></div>
                <ul className="bottomPart">
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Log in</a></li>
                    <li><a href="#">Messenger</a></li>
                    <li><a href="#">Facebook Lite</a></li>
                    <li><a href="#">Video</a></li>
                    <li><a href="#">Places</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Meta Pay</a></li>
                    <li><a href="#">Meta Store</a></li>
                    <li><a href="#">Meta Quest</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Threads</a></li>
                    <li><a href="#">Fundraisers</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Privacy Centre</a></li>
                    <li><a href="#">Groups</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">CreateAd</a></li>
                    <li><a href="#">CreatePage</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">AdChoices</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Contact uploading and non-users</a></li>
                </ul>
            </div>

        </>
    );
};

export default Activation;