import React, {useEffect} from 'react';
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { BiSolidUserDetail } from "react-icons/bi";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";
import './../../assets/sass/style.scss';
import Header from "../../components/header/Header";
import me from './../../assets/images/me.jpg';
import man from './../../assets/images/man.jpg';
import {useDispatch, useSelector} from "react-redux";
import {friendRequestConfirm, friendRequestSend, getAllUser} from "../../redux/auth/AuthAction";

const Friends = () => {

    const {user, users} = useSelector(state=>state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUser(user._id))
    }, []);

    const handleRequestSend = (receiverId) => {
        dispatch(friendRequestSend(user._id, receiverId))

    }

    const handleFriendReqConfirm = (senderId) => {
        dispatch(friendRequestConfirm(senderId,user._id))
    }

    console.log(users)

    return (
        <>
        <Header />
        <div className="friendContainer">
            <div className="friendWrapper">
                <div className="friendsOptions">
                    <div className="friendsHeader">
                        <div className="item">
                            <h1>Friends</h1>
                        </div>
                        <span><IoSettingsSharp className="settingIcon" /></span>
                    </div>
                    <div className="options">
                        <div className="home">
                            <div className="item">
                                <span><FaUserFriends className="optionsIcon" /></span>
                                <h2>Home</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                        <div className="home">
                            <div className="item">
                                <span><FaUserCheck className="optionsIcon" /></span>
                                <h2>Friend Request</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                        <div className="home">
                            <div className="item">
                                <span><FaUserPlus className="optionsIcon" /></span>
                                <h2>Suggestions</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                        <div className="home">
                            <div className="item">
                                <span><BiSolidUserDetail className="optionsIcon" /></span>
                                <h2>All Friends</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                        <div className="home">
                            <div className="item">
                                <span><LiaBirthdayCakeSolid className="optionsIcon" /></span>
                                <h2>BirthDays</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                        <div className="home">
                            <div className="item">
                                <span><BiSolidUserDetail className="optionsIcon" /></span>
                                <h2>Custom List</h2>
                            </div>
                            <IoIosArrowForward className="forwardIcon" />
                        </div>
                    </div>
                </div>
                <div className="allFriends">
                    <div className="friendsRequest">
                        <div className="requestFriendsHeader">
                            <h2>Friends Request</h2>
                            <a href="">See all</a>
                        </div>

                        {
                           users.map((item, index) =>{
                                if (user.request.includes(item._id) && user.followers.includes(item._id)) {
                                    return (
                                        <div className="friendsItem">
                                            <img className="friendImage" src={`profile/${item.profile_photo}`} alt=""/>
                                            <div className="friendsContent">
                                                <h3>{item.first_name} {item.sur_name}</h3>
                                                <div className="mutual">
                                                    <img className="mutualPhoto" src={man} alt=""/>
                                                    <span>1 mutual friend</span>
                                                </div>
                                                <div className="buttonsItem">
                                                    <button onClick={()=>handleFriendReqConfirm(item._id)} className="confirm">Confirm</button>
                                                    <button>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }


                    </div>
                    <div className="youMayKnow">
                        <div className="friendsRequest">
                            <div className="requestFriendsHeader">
                                <h2>People you may know</h2>
                                <a href="">See all</a>
                            </div>

                            {
                                users.map((item, index)=>{
                                    if (!item.following.includes(user._id) && !user.following.includes(item._id) && !user.request.includes(item._id)){
                                        return (
                                            <div className="friendsItem">
                                                <img className="mutualPhoto" src={`profile/${item.profile_photo}`} alt=""/>
                                                <div className="friendsContent">
                                                    <h3>{item.first_name} {item.sur_name}</h3>
                                                    <div className="mutual">
                                                        <img className="mutualPhoto" src={man} alt=""/>
                                                        <span>1 mutual friend</span>
                                                    </div>
                                                    <div className="buttonsItem">
                                                        <button onClick={()=>handleRequestSend(item._id)} className="confirm">Add Friend</button>
                                                        <button>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>


        </>
    );
};

export default Friends;