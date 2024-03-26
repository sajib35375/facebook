import React, {useState} from 'react';
import { RxCross2 } from "react-icons/rx";
import logo from './../../assets/images/logofb.png';
import {FaMoon, FaTh} from "react-icons/fa";
import { RiMessengerFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import profile from '../../assets/images/me.jpg'
import {Link} from "react-router-dom";
import Avatar from "../Avatar";
import {IoLogOut, IoPeopleSharp} from "react-icons/io5";
import {IoIosSettings} from "react-icons/io";
import {MdFeedback, MdKeyboardArrowRight} from "react-icons/md";
import {BsQuestionCircleFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../redux/auth/AuthAction";
import './../../assets/sass/style.scss';

const PopupFullWidth = ({setPopUpClose, children}) => {
    const [show, setShow] = useState(false);
    const {user} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const handleUserLogout = (e) => {
        e.preventDefault();

        dispatch(userLogout())
    }
    return (
        <>
        <div className="popUpWrapper">
            <div className="popUpContainer">
                <div className="leftPart">
                    <a onClick={()=>setPopUpClose(false)}><RxCross2 className="crossIcon" /></a>
                    <a href=""><img className="logo" src={logo} alt=""/></a>
                </div>
                <div className="mainPart">
                    {children}
                </div>
                <div className="rightMenu">
                    <div className="item">
                        <a href=""><FaTh className="icon" /></a>
                    </div>
                    <div className="item">
                        <a href=""><RiMessengerFill className="icon" /></a>
                    </div>
                    <div className="item">
                        <a href=""><FaBell className="icon" /></a>
                    </div>
                    <div className="item">
                        <a onClick={()=>setShow(!show)}><img className="img" src={profile} alt=""/></a>
                    </div>
                    {
                        show && <div className="dropDwon" >
                            <div className="dropDownWrapper">
                                <div className="card shadow upperPart">
                                    <div className="card-body">
                                        <div className="user">
                                            <Link to="/profile">
                                                <Avatar/>
                                                <p>{user.first_name} {user.sur_name}</p>
                                            </Link>
                                        </div>
                                        <div className="underline"></div>
                                        <button>
                                            <IoPeopleSharp/>
                                            See all profiles
                                        </button>
                                    </div>
                                </div>
                                <div className="options">
                                    <div className="setting">
                                        <a href="#">
                                            <div className="firstPart">
                                                <div className="iconContainer">
                                                    <IoIosSettings className="profileIcon"/>
                                                </div>
                                                <p>Setting and privacy</p>
                                            </div>
                                            <div className="rightPart">
                                                <MdKeyboardArrowRight className="arrowIcon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="help">
                                        <a href="">
                                            <div className="firstPart">
                                                <div className="iconContainer">
                                                    <BsQuestionCircleFill className="profileIcon"/>
                                                </div>

                                                <p>Help & support</p>
                                            </div>
                                            <div className="rightPart">
                                                <MdKeyboardArrowRight className="arrowIcon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="display">
                                        <a href="">
                                            <div className="firstPart">
                                                <div className="iconContainer">
                                                    <FaMoon className="profileIcon"/>
                                                </div>
                                                <p>Display and accessibility</p>
                                            </div>
                                            <div className="rightPart">
                                                <MdKeyboardArrowRight className="arrowIcon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="feedback">
                                        <a href="">
                                            <div className="firstPart">
                                                <div className="iconContainer">
                                                    <MdFeedback className="profileIcon"/>
                                                </div>
                                                <p>Give feedback</p>
                                            </div>
                                            <div className="rightPart">
                                                <MdKeyboardArrowRight className="arrowIcon"/>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="logout">
                                        <a onClick={handleUserLogout}>
                                            <div className="firstPart">
                                                <div className="iconContainer">
                                                    <IoLogOut className="profileIcon"/>
                                                </div>
                                                <p>Logout</p>
                                            </div>
                                            <span className="rightPart">
                                   <MdKeyboardArrowRight className="arrowIcon"/>
                               </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>

        </>
    );
};

export default PopupFullWidth;