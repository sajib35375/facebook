import React from 'react';
import Avatar from "../Avatar";
import img from "../../assets/images/post.jpg";
import live from "../../assets/images/live-video.png";
import file from "../../assets/images/file.png";
import imo from "../../assets/images/imo.png";
import profilePic from "../../assets/images/me.jpg";
import {LiaGlobeAmericasSolid} from "react-icons/lia";
import {IoIosMore, IoIosShareAlt} from "react-icons/io";
import {AiOutlineLike} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";

const ProfileTimeLine = () => {
    return (
        <>

            <div className="middlePart">
                <div className="sendPostArea">
                    <div className="post">
                        <Avatar/>
                        <input placeholder="What's on your mind, Shahnewaj?" type="text"/>
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
                <div className="viewPostArea">
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
                <div className="viewPostArea">
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
                <div className="viewPostArea">
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


        </>
    );
};

export default ProfileTimeLine;