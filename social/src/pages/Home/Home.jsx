import React, {useEffect, useRef, useState} from 'react';
import { FiSearch } from "react-icons/fi";
import { GoHomeFill } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { PiMonitorPlay } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { VscGame } from "react-icons/vsc";
import { CgMenuGridR } from "react-icons/cg";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import logo from './../../assets/images/logo.png';
import profilePic from './../../assets/images/me.jpg';
import bgc from './../../assets/images/bgc.jpg';
import img1 from './../../assets/images/tree.jpg';
import img2 from './../../assets/images/abstract.jpg';
import live from './../../assets/images/live-video.png';
import file from './../../assets/images/file.png';
import imo from './../../assets/images/imo.png';
import { LiaGlobeAmericasSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";
import img from './../../assets/images/post.jpg';
import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import Avatar from "../../components/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {userLogout} from "../../redux/auth/AuthAction";
import Auth from "../Auth/Auth";
import {Link, useNavigate} from "react-router-dom";
import useData from "../../hook/useData";
import usePopupClose from "../../hook/usePopupClose";
import FbModal from "../../components/FbModal/FbModal";
import { FaUserGroup } from "react-icons/fa6";
import profile from './../../assets/images/me.jpg';
import { CiFaceSmile } from "react-icons/ci";
import { GrMore } from "react-icons/gr";

const Home = () => {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [postModalShow, setPostModalShow] = useState(false);


    const handleDropdown = (e) => {
        e.preventDefault();

        if(show===false){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    const {user, loginState} = useSelector(state=>state.auth)

    const handleUserLogout = (e) => {
        e.preventDefault();

        dispatch(userLogout())
    }

    const handleProfile = () => {
        navigate("/profile")
    }

    const handleFriends = () => {
        navigate("/friends")
    }

    const userDropDown = useRef(null);
    usePopupClose(userDropDown, setShow)


    return (
       <>

           {
               loginState ? <>



                   <div className="headerContainer">
                       <div className="leftPart">
                           <a href="#"><img className="logo" src={logo} alt=""/></a>
                           <a className="searchLink" href="#"> <FiSearch className="searchIcon"/></a>
                           <a className="inputContainer" href="#"> <input className="searchInput"
                                                                          placeholder="Search facebook"
                                                                          type="text"/></a>
                       </div>
                       <div className="middlePart">
                           <a className="activeItem" href=""><GoHomeFill className="middleIcon"/>
                               <span className="underline"></span>
                           </a>
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
                           <a onClick={()=>setShow(!show)} className="iconLink" href="#"><Avatar/></a>

                           {
                               show && <div className="dropDwon" ref={userDropDown}>
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

                   <div className="bodyContainer">
                       <div className="leftPart">
                           <div onClick={handleProfile} className="item">
                               <Avatar/>
                               <p>{user.first_name} {user.sur_name}</p>
                           </div>
                           <div onClick={handleFriends} className="item">
                               <div className="bgc"></div>
                               <p>Friends</p>
                           </div>
                           <div className="item">
                               <div className="bgc2"></div>
                               <p>Saved</p>
                           </div>
                           <div className="item">
                               <div className="bgc3"></div>
                               <p>Memories</p>
                           </div>
                           <div className="item">
                               <div className="bgc4"></div>
                               <p>Groups</p>
                           </div>
                           <div className="item">
                               <div className="bgc5"></div>
                               <p>Video</p>
                           </div>
                           <div className="item">
                               <a href="">
                                   <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"
                                        aria-hidden="true"
                                        className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq more"
                                        style={{color: 'var(--primary-icon)'}}>
                                       <g fill-rule="evenodd" transform="translate(-448 -544)">
                                           <path fill-rule="nonzero"
                                                 d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                                       </g>
                                   </svg>
                               </a>
                               <p>See More</p>
                           </div>
                           <hr/>


                           <h4>Your shortcuts</h4>
                           <div className="item2">
                               <img src={bgc} alt=""/>
                               <p>Laravel Community</p>
                           </div>
                           <div className="item2">
                               <img src={img1} alt=""/>
                               <p>MERN Community</p>
                           </div>
                           <div className="item2">
                               <img src={img2} alt=""/>
                               <p>Kheladhula</p>
                           </div>
                           <div className="item2">
                               <img src={img1} alt=""/>
                               <p>Python BD</p>
                           </div>
                           <div className="item2">
                               <img src={img2} alt=""/>
                               <p>React Community</p>
                           </div>
                           <div className="item">
                               <a href="">
                                   <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor"
                                        aria-hidden="true"
                                        className="x19dipnz x1lliihq x1k90msu x2h7rmj x1qfuztq more"
                                        style={{color: 'var(--primary-icon)'}}>
                                       <g fill-rule="evenodd" transform="translate(-448 -544)">
                                           <path fill-rule="nonzero"
                                                 d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path>
                                       </g>
                                   </svg>
                               </a>
                               <p>See More</p>
                           </div>
                       </div>
                       <div className="middlePart">
                           <div className="sendPostArea">
                               <div className="post">
                                   <Avatar/>
                                   <input onClick={()=>setPostModalShow(!postModalShow)} placeholder="What's on your mind, Shahnewaj?" type="text"/>
                               </div>

                               <div className="underline"></div>
                               <div className="footer">
                                   <div className="item">
                                       <img src={live} alt=""/>
                                       <p>Live Video</p>
                                   </div>
                                   <div className="item">
                                       <img src={file} alt=""/>
                                       <p>Photo/Video</p>
                                   </div>
                                   <div className="item">
                                       <img src={imo} alt=""/>
                                       <p>Feeling/Activity</p>
                                   </div>
                               </div>
                           </div>
                           <div className="viewPostArea">
                               {
                                   postModalShow && <FbModal title="Create Post" modalPopUp={setPostModalShow}>
                                       <form action="">
                                           <div className="userArea">
                                               <img className="postUser" src={profile} alt=""/>
                                               <div className="userInfo">
                                                   <span className="name">Shahnewaj Sajib</span>
                                                   <div className="optionSelect">
                                                       <FaUserGroup/>
                                                       <select className="optionTag" name="" id="">
                                                           <option value="">Friends</option>
                                                       </select>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="postArea">
                                               <textarea placeholder={`What's on your mind ${user.first_name}`}
                                                         className="portHere" name="" id=""></textarea>
                                           </div>
                                           <div className="iconArea">
                                               <img className="postLeftIcon"
                                                    src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                                                    alt=""/>
                                               <CiFaceSmile className="postRightIcon"/>
                                           </div>
                                           <div className="addPostArea">
                                               <div className="text">
                                                   <h3>Add to your post</h3>
                                               </div>
                                               <div className="postIcons">
                                                   <img
                                                       src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                                                       alt=""/>
                                                   <img
                                                       src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/b37mHA1PjfK.png"
                                                       alt=""/>
                                                   <img
                                                       src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                                                       alt=""/>
                                                   <img
                                                       src="https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/8zlaieBcZ72.png"
                                                       alt=""/>
                                                   <img
                                                       src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/q7MiRkL7MLC.png"
                                                       alt=""/>
                                                   <GrMore/>
                                               </div>
                                           </div>
                                           <button>Post</button>
                                       </form>
                                   </FbModal>
                               }
                               <div className="topPart">
                                   <div className="leftArea">
                                       <img src={profilePic} alt=""/>
                                       <div className="content">
                                           <p>Shahnewaj sajib</p>
                                           <span>30m.</span> <LiaGlobeAmericasSolid/>
                                       </div>
                                   </div>
                                   <div className="rightArea">
                                       <IoIosMore className="icon"/>
                                   </div>
                               </div>
                               <div className="postArea">
                                   <div className="caption">
                                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus earum
                                           exercitationem iure labore magni minus suscipit tempore tenetur ut vel.</p>
                                   </div>
                                   <div className="photoVideo">
                                       <img src={img} alt=""/>
                                   </div>
                               </div>
                               <div className="postFooterArea">
                                   <div className="topPartReaction">
                                       <p>sajib,ashraf,imran and others</p>
                                       <p>35 comments</p>
                                   </div>
                                   <div className="underline"></div>
                                   <div className="bottomPartReaction">
                                       <div className="like">
                                           <AiOutlineLike/> Like
                                       </div>
                                       <div className="commects">
                                           <FaRegComment/> Comments
                                       </div>
                                       <div className="share">
                                           <IoIosShareAlt/> Share
                                       </div>
                                   </div>
                                   <div className="underline"></div>
                               </div>
                           </div>


                       </div>
                       <div className="rightPart">

                       </div>
                   </div>

               </> : <Auth />
           }


       </>
    );
};

export default Home;