import React, {useState} from 'react';
import logo from "../../assets/images/forgotLogo.png";
import profile from "../../assets/images/me.jpg";
import {Link, useNavigate} from "react-router-dom";
import {AiTwotonePlusSquare} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {changePassword} from "../../redux/auth/AuthAction";
import Cookies from "js-cookie";

const ChangePassword = () => {

    const [password, setPassword] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = JSON.parse(Cookies.get('userId'));
    const handleChangePassword = (e) => {
        e.preventDefault();

        dispatch(changePassword(id, password, navigate))
    }

    const handleChangeCancel = (e) => {
        e.preventDefault();
        Cookies.remove('userId');
        Cookies.remove('pass-code');
        Cookies.remove('findUser');
        navigate("/auth")
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
                            <h2>Choose a new password</h2>
                            <hr/>
                            <form onSubmit={handleChangePassword} action="">
                                <div className="findContainer">
                                    <p>Create a new password that is at least 6 characters long. A strong password has a
                                        combination of letters, digits and punctuation marks.</p>
                                    <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password" type="password"/>
                                </div>
                                <hr/>
                                <div className="button">
                                    <Link onClick={handleChangeCancel} className="cancel">Not You?</Link>
                                    <button type="submit" className="search">Continue</button>
                                </div>
                            </form>
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

export default ChangePassword;