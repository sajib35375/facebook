import React, {useState, useCallback } from 'react';
import img from "../../assets/images/post.jpg";
import coverPhoto from "../../assets/images/bgc.jpg";
import {MdCameraAlt, MdEdit, MdKeyboardArrowDown, MdOutlineArrowDropDown} from "react-icons/md";
import profilePic from "../../assets/images/me.jpg";
import frnd from "../../assets/images/pro.jpg";
import {IoIosMore} from "react-icons/io";
import Avatar from "../Avatar";
import { BsFillCalendarPlusFill } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { FaUserTimes } from "react-icons/fa";
import { IoMdCamera } from "react-icons/io";
import FbModal from "../FbModal/FbModal";
import './../../assets/sass/style.scss';
import { GoPlus } from "react-icons/go";
import Cropper from 'react-easy-crop';
import { FiMinus } from "react-icons/fi";
import getCroppedImg from "../../utility/crop";
import {useDispatch, useSelector} from "react-redux";
import {profilePhoto} from "../../redux/auth/AuthAction";
import { IoIosCrop } from "react-icons/io";
import { BiLogoDeviantart } from "react-icons/bi";

const ProfileCover = ({classes}) => {
    const [modalShow, setModalShow] = useState(false)
    const [image, setImage] = useState();

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
    const [croppedImage, setCroppedImage] = useState(null)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const showCroppedImage = async () => {
        try {
            
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels
            )
            setCroppedImage(croppedImage)
            setImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }
    console.log(image)
    const onClose = () => {
        setCroppedImage(null)
    }

    const handleProfilePhoto = (e) => {
        let url = URL.createObjectURL(e.target.files[0])
        setImage(url)
    }

    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth);

    const handleProfilePhotoUpload = async (e) => {

        const mainImg = await fetch(croppedImage).then((res)=>res.blob());
        const mainFile = new File([mainImg],'profile_photo.png',{
            type : 'image/png'
        })

        const data = new FormData();
        data.append('profile_photo', mainFile)

        dispatch(profilePhoto(user._id,data))
    }

    return (
        <>

            <div className="profileCoverContainer">
                {
                    modalShow && <FbModal title="Choose profile picture" setImage={setImage} modalPopUp={setModalShow}>
                        <div className="profilePicContainer">
                            {
                                !image && <div className="uploadPhoto">
                                    <label htmlFor="uploadPhoto">
                                        <input id="uploadPhoto" onChange={handleProfilePhoto} style={{display: "none"}} type="file"/>
                                        <GoPlus/>Upload Photo
                                    </label>
                                </div>
                            }
                            {
                                image && <>

                                    <div className="imageCropArea">
                                        <textarea placeholder="Description" className="description"></textarea>
                                        <div className="cropZone">
                                            <Cropper
                                                image={image}
                                                crop={crop}
                                                zoom={zoom}
                                                aspect={1 / 1}
                                                cropSize={{width:300, height:300}}
                                                onCropChange={setCrop}
                                                onCropComplete={onCropComplete}
                                                onZoomChange={setZoom}
                                                cropShape="round"
                                            />
                                        </div>
                                    </div>
                                    <div className="zoomArea">
                                        <button><GoPlus/></button>
                                        <input className="inputRange" onChange={(e) => setZoom(e.target.value)} max="5"
                                               min="1" value={zoom} step=".06" type="range"/>
                                        <button><FiMinus/></button>
                                    </div>
                                    <div className="cropBtn">
                                        <button onClick={showCroppedImage}><IoIosCrop />Crop Photo</button>
                                        <button><BiLogoDeviantart />Make Temporary</button>
                                    </div>
                                    <div className="footerBtn">
                                        <button onClick={onClose}>Cancel</button>
                                        <button onClick={handleProfilePhotoUpload} className="save">Save</button>
                                    </div>
                                </>
                            }
                        </div>
                    </FbModal>
                }
                <div className="profileCover">
                    <img src={coverPhoto} alt=""/>
                    <button className="coverBtn"><MdCameraAlt className="coverIcon"/>Edit cover photo</button>
                    <div className="userProfile">
                        <div className="userProfileContainer">

                            <Avatar className="profile"/>
                            <button onClick={() => setModalShow(!modalShow)}><IoMdCamera/></button>
                            <div className="userInfo">
                                <div className="userData">
                                    <h3>{user.first_name} {user.sur_name}</h3>
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