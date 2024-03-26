import React from 'react';
import img from "../../assets/images/post.jpg";
import coverPhoto from "../../assets/images/bgc.jpg";
import {MdCameraAlt, MdEdit, MdKeyboardArrowDown, MdOutlineArrowDropDown} from "react-icons/md";
import profilePic from "../../assets/images/me.jpg";
import frnd from "../../assets/images/pro.jpg";
import {GoPlus} from "react-icons/go";
import {IoIosMore} from "react-icons/io";
import Avatar from "../Avatar";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaUserTimes } from "react-icons/fa";

const ProfileCover = () => {
    return (
        <>

            <div className="profileCoverContainer">
                <div className="profileCover">
                    <img src={coverPhoto} alt=""/>
                    <button className="coverBtn"><MdCameraAlt className="coverIcon"/>Edit cover photo</button>
                    <div className="userProfile">
                        <div className="userProfileContainer">
                            <Avatar className="profile" />
                            <div className="userInfo">
                                <div className="userData">
                                    <h3>Shahnewaj Sajib</h3>
                                    <p>200 friends</p>
                                </div>
                                <div className="friendsPhoto">
                                    <img className="first" src={frnd} alt=""/>
                                    <img className="second" src={frnd} alt=""/>
                                    <img className="third" src={frnd} alt=""/>
                                    <img className="fourth" src={frnd} alt=""/>
                                    <img className="five" src={frnd} alt=""/>
                                    <img className="six" src={frnd} alt=""/>
                                    <img className="seven" src={frnd} alt=""/>
                                    <img className="eight" src={frnd} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="userOptions">
                            <button className="rightButton1"><BsFillCalendarPlusFill className="friendIcon" />Follow</button>
                            <button className="rightButton2"><RiMessengerLine className="friendIcon" />Message</button>
                            <button className="rightButton3"><FaUserTimes className="friendIcon" />Add friends</button>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="underline"></div>
                <div className="profileCoverFooter">
                    <div className="leftPart">
                        <div className="item">
                            <a href="">Posts</a>
                        </div>
                        <div className="item">
                            <a href="">About</a>
                        </div>
                        <div className="item">
                            <a href="">Friends</a>
                        </div>
                        <div className="item">
                            <a href="">Photos</a>
                        </div>
                        <div className="item">
                            <a href="">Videos</a>
                        </div>
                        <div className="item">
                            <a href="">Check-ins</a>
                        </div>
                        <div className="item">
                            <a href="">More<MdOutlineArrowDropDown className="moreIcon"/></a>
                        </div>
                    </div>
                    <div className="rightPart">
                        <a href="">
                            <IoIosMore/>
                        </a>
                    </div>
                </div>

            </div>


        </>
    );
};

export default ProfileCover;