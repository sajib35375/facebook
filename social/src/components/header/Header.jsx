import React, {useState} from 'react';
import img from "../../assets/images/post.jpg";
import logo from "../../assets/images/logo.png";
import {FiSearch} from "react-icons/fi";
import {GoHomeFill} from "react-icons/go";
import {LuUsers} from "react-icons/lu";
import {PiMonitorPlay} from "react-icons/pi";
import {MdFeedback, MdGroups, MdKeyboardArrowRight} from "react-icons/md";
import {VscGame} from "react-icons/vsc";
import {CgMenuGridR} from "react-icons/cg";
import {FaFacebookMessenger, FaMoon} from "react-icons/fa";
import {IoLogOut, IoNotificationsSharp, IoPeopleSharp} from "react-icons/io5";
import Avatar from "../Avatar";
import {Link} from "react-router-dom";
import {IoIosSettings} from "react-icons/io";
import {BsQuestionCircleFill} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../redux/auth/AuthAction";

const Header = () => {

    const [dropDown, setDropDown] = useState(false);
    const dispatch = useDispatch();

    const handleDropdown = (e) => {
        e.preventDefault();

        if(dropDown===false){
            setDropDown(true)
        }else{
            setDropDown(false)
        }
    }

    const {user} = useSelector(state=>state.auth)

    const handleUserLogout = (e) => {
        e.preventDefault();

        dispatch(userLogout())
    }

    return (
        <>

            <div className="headerContainer">
                <div className="leftPart">
                    <a href="#"><img className="logo" src={logo} alt=""/></a>
                    <a className="searchLink" href="#"> <FiSearch className="searchIcon"/></a>
                    <a className="inputContainer" href="#"> <input className="searchInput"
                                                                   placeholder="Search facebook"
                                                                   type="text"/></a>
                </div>
                <div className="middlePart">
                    <Link className="activeItem" to="/"><GoHomeFill className="middleIcon"/>
                        <span className="underline"></span>
                    </Link>
                    <a href=""><LuUsers className="middleIcon"/>
                        <span className="underline"></span>
                    </a>
                    <a href=""><PiMonitorPlay className="middleIcon"/>
                        <span className="underline"></span>
                    </a>
                    <a href=""><MdGroups className="middleIcon"/>
                        <span className="underline"></span>
                    </a>
                    <a href=""><VscGame className="middleIcon"/>
                        <span className="underline"></span>
                    </a>
                </div>
                <div className="rightPart">
                    <a className="iconLink" href=""><CgMenuGridR className="rightIcon"/></a>
                    <a className="iconLink" href=""><FaFacebookMessenger className="rightIcon"/></a>
                    <a className="iconLink" href=""><IoNotificationsSharp className="rightIcon"/></a>
                    <a onClick={handleDropdown} className="iconLink" href="#"><Avatar/></a>

                    {
                        dropDown && <div className="dropDwon">
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
                                            <div className="leftPart">
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
                                            <div className="leftPart">
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
                                            <div className="leftPart">
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
                                            <div className="leftPart">
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
                                            <div className="leftPart">
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


        </>
    );
};

export default Header;