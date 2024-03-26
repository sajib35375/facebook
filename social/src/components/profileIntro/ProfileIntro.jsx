import React, {useEffect, useState} from 'react';
import {HiExclamationCircle} from "react-icons/hi";
import {FaBriefcase} from "react-icons/fa6";
import {FcGlobe} from "react-icons/fc";
import img from "../../assets/images/post.jpg";
import feature from "../../assets/images/feature.jpg";
import gallery from "../../assets/images/gallery.jpg";
import friend from "../../assets/images/friend.jpg";
import {useDispatch, useSelector} from "react-redux";
import { FaGlobeAmericas } from "react-icons/fa";
import {useParams} from "react-router-dom";
import {featuredPhotos, profileBioUpdate} from "../../redux/auth/AuthAction";
import './../../assets/sass/style.scss';
import FbModal from "../FbModal/FbModal";
import QuickUpdate from "../quickUpdate/QuickUpdate";
import { TbCategory } from "react-icons/tb";
import { MdEdit } from "react-icons/md";
import { MdAssuredWorkload } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { FaHouseCircleCheck } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { BsCalendar2DateFill } from "react-icons/bs";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import PopupFullWidth from "../PopupFullWidth/PopupFullWidth";
import StorySlider from "../StorySlider/StorySlider";
import featureIntro from './../../assets/images/feature.webp';
import pre from "../../assets/images/pro.jpg";
import Gallery from "../Gallery/Gallery";



const ProfileIntro = () => {
    const {user} = useSelector(state=>state.auth);
    const [bioShow, setBioShow] = useState(false);
    const [remain, setRemain] = useState(user.bio && user.bio.length)
    const [bioCount, setBioCount] = useState(101-(user.bio && user.bio.length))
    const [bioBtn, setBioBtn] = useState(false)
    const [bio, setBio] = useState('')
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [categoryShow, setCategoryShow] = useState(false)
    const [category, setCategory] = useState();
    const [company, setCompany] = useState();
    const [position, setPosition] = useState();
    const [jobShow, setJobShow] = useState(false);
    const [schoolShow, setSchoolShow] = useState(false);
    const [school, setSchool] = useState();
    const [universityShow, setUniversityShow] = useState(false);
    const [university, setUniversity] = useState();
    const [livingShow, setLivingShow] = useState(false);
    const [living, setLiving] = useState();
    const [showHome, setShowHome] = useState(false);
    const [home, setHome] = useState();
    const [relationShow, setRelationShow] = useState(false);
    const [relationShipStatus, setRelationShipStatus] = useState('Married')
    const [popUpShow, setPopUpShow] = useState(false)
    const [featuredShow, setFeaturedShow] = useState(false)
    const [featureUploadShow, setFeatureUploadShow] = useState(false);
    const [featurePre, setFeaturePre] = useState([]);
    const [featureUpload, setFeatureUpload] = useState([]);
    const [featureChecked, setFeatureChecked] = useState([]);
    const [photoShow, setPhotoShow] = useState(false);


    useEffect(() => {
        setRemain(101 - (user.bio && user.bio.length))
    }, []);



    const handleBioShow = (e) => {
        setBioShow(!bioShow)
    }


    const handleBioChange = (e) => {

        setBioCount(101 - e.target.value.length)
        setBioBtn(false)
        setBio(e.target.value)
    }

    const handleBioUpdate = (e) => {
        e.preventDefault();
        dispatch(profileBioUpdate({bio}, user._id, setBioShow))
    }

    const handleCategoryUpdate = (e) => {
        e.preventDefault();
        dispatch(profileBioUpdate({category}, user._id, setCategoryShow))
    }

    const handleWork = (e) => {
        e.preventDefault();

        dispatch(profileBioUpdate({work:[...user.work,{position:position,company:company}]}, user._id, setJobShow))
    }

    const handleWorkDelete = (company) => {
        const filterWork = user.work.filter((data)=>data.company!==company)
        dispatch(profileBioUpdate({work: filterWork}, user._id, setJobShow))
    }

    const handleUpdateSchool = (e) => {
        e.preventDefault();

        dispatch(profileBioUpdate({school}, user._id, setSchoolShow))
    }

    const handleUniversityUpdate = (e) => {
        e.preventDefault();

        dispatch(profileBioUpdate({university}, user._id, setUniversityShow))
    }

    const handleLivingUpdate = (e) => {
        e.preventDefault()

        dispatch(profileBioUpdate({living}, user._id, setLivingShow))
    }

    const handleAddHome = (e) => {
        e.preventDefault();

        dispatch(profileBioUpdate({home_town:home}, user._id, setShowHome))
    }

    const handleRelation = (e) => {
        e.preventDefault();

        setRelationShipStatus(e.target.value);
    }

    const handleRelationData = (e) => {
        e.preventDefault();

        dispatch(profileBioUpdate({relationShipStatus}, user._id, setRelationShow))
    }

    const handleUploadShow = (e) => {

        setFeaturedShow(false)
        setFeatureUploadShow(true)
    }

    const handleModalBack = (e) => {
        setFeaturedShow(true)
        setFeatureUploadShow(false)
        setFeaturePre([])
        setFeatureUpload([])
        setFeatureChecked([])

    }

    const handlePhotoPreview = (e) => {

        let imagePre = Array.from(e.target.files)
        setFeaturePre((preState)=>([...preState,...imagePre]))
        setFeatureUpload((prevState)=>([...prevState,...imagePre]))
        setFeatureChecked((prevState)=>([...prevState,...imagePre]))
    }

    const handleCheckBoxChange = (e) => {
        let imageValue = featureUpload.find((data)=>data.name === e.target.value)
        const preVal = [...featureChecked]

        if (featureChecked.includes(imageValue)){
            preVal.splice(preVal.indexOf(imageValue), 1)
        }else{
            preVal.push(imageValue)
        }

        setFeatureChecked(preVal)

    }



    const handleFeaturedPhoto = (e) => {
        e.preventDefault();

        const data = new FormData();
        featureChecked.forEach(item=>{
            data.append('featured',item)
        })

        dispatch(featuredPhotos(data, user._id))

        setFeatureUploadShow(false)
    }


    return (
        <>
            {
                modal && <FbModal title={'Edit Details'} modalPopUp={setModal}>
                    <span
                        className="modalHeading">Details you select will be Public and appear at the top of your profile</span>
                    <div className="modalItemContainer">
                        <div className="item">
                            <div className="title">
                                <span>Category</span>
                            </div>
                            {
                                !user.category  && <>
                                    <div className="itemContent">
                                        <a onClick={() => setCategoryShow(!categoryShow)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add a Category</span>
                                        </a>
                                    </div>
                                </>
                            }

                            {
                                user.category && !categoryShow  && <>

                                    <div className="itemContent">
                                        <a>
                                            <TbCategory/>
                                            <span>{user.category}</span>
                                        </a>
                                        <button onClick={()=>setCategoryShow(true)} className="edit"><MdEdit/></button>
                                    </div>
                                </>
                            }

                            {
                                categoryShow &&
                                <QuickUpdate  hide={setCategoryShow} data={{
                                    data: category,
                                    setData: setCategory,
                                    placeholder:"Set your category"
                                }}
                                 save={handleCategoryUpdate}
                                />
                            }

                        </div>
                        <div className="item">
                            <div className="title">
                                <span>Work</span>
                            </div>

                                <div className="itemContent">
                                    <a onClick={()=>setJobShow(!jobShow)}>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                        <span>Add a workplace</span>
                                    </a>
                                </div>

                            {
                                user.work.length > 0 && !jobShow && <>

                                    <div className="itemContent">
                                        <div className="workHistory">
                                            {
                                                user.work.map((item, index) =>
                                                    <>
                                                        <div className="workWrapper">
                                                            <a className="workItem">
                                                                <MdAssuredWorkload className="workIcon" />
                                                                <p>{item.position} of {item.company}</p>
                                                            </a>

                                                            <button onClick={() => handleWorkDelete(item.company)} className="trash">
                                                                <FaRegTrashAlt/></button>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </div>

                                    </div>


                                </>
                            }

                            {
                                jobShow && <>

                                <QuickUpdate hide={setJobShow} data={{
                                        data: position,
                                        setData: setPosition,
                                        placeholder: "Enter your company position"
                                    }}
                                                 info={{
                                                     data: company,
                                                     setData: setCompany,
                                                     placeholder: "Enter your company name"
                                                 }}
                                                 save={handleWork}
                                    />

                                </>
                            }


                        </div>
                        <div className="item">
                            <div className="title">
                                <span>Education</span>
                            </div>
                            {
                                !user.school && !schoolShow && <>

                                    <div className="itemContent">
                                        <a onClick={()=>setSchoolShow(!schoolShow)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add a secondary school</span>
                                        </a>
                                    </div>

                                </>
                            }


                            {
                                user.school  && <>

                                    <div className="itemContent">
                                        <a>
                                            <FaLayerGroup />
                                            <span>{user.school}</span>
                                        </a>
                                        <button onClick={()=>setSchoolShow(true)} className="edit"><MdEdit/></button>
                                    </div>


                                </>
                            }



                            {
                                schoolShow && <QuickUpdate hide={setSchoolShow}  data={{
                                    data: school,
                                    setData: setSchool,
                                    placeholder:"Add your school"
                                }} save={handleUpdateSchool} />
                            }




                            {
                                !user.university && !universityShow && <>

                                    <div className="itemContent">
                                        <a onClick={()=>setUniversityShow(!universityShow)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add University</span>
                                        </a>
                                    </div>

                                </>
                            }

                            {
                                user.university  && <>

                                    <div className="itemContent">
                                        <a>
                                            <FaLayerGroup />
                                            <span>{user.university}</span>
                                        </a>
                                        <button onClick={()=>setUniversityShow(true)} className="edit"><MdEdit/></button>
                                    </div>


                                </>
                            }

                            {
                                universityShow && <QuickUpdate hide={setUniversityShow}  save={handleUniversityUpdate} data={{
                                    data: university,
                                    setData: setUniversity,
                                    placeholder:"Add your university"
                                }} />
                            }


                        </div>
                        <div className="item">
                            <div className="title">
                                <span>CurrentTown/city</span>
                            </div>

                            {
                                !user.living && !livingShow && <>

                                    <div className="itemContent">
                                        <a onClick={()=>setLivingShow(!livingShow)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add current city</span>
                                        </a>
                                    </div>

                                </>
                            }

                            {
                                user.living && <>

                                    <div className="itemContent">
                                        <a>
                                            <FaHouseCircleCheck />
                                            <span>{user.living}</span>
                                        </a>
                                        <button onClick={() => setLivingShow(true)} className="edit"><MdEdit/></button>
                                    </div>


                                </>
                            }

                            {
                                livingShow && <QuickUpdate save={handleLivingUpdate} hide={setLivingShow} data={{
                                    data:living,
                                    setData:setLiving,
                                    placeholder:"Add your living town"
                                }} />
                            }


                        </div>
                        <div className="item">
                            <div className="title">
                                <span>Home town</span>
                            </div>
                            {
                                !user.home_town && !showHome && <>

                                    <div className="itemContent">
                                        <a onClick={()=>setShowHome(!showHome)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add home town</span>
                                        </a>
                                    </div>

                                </>
                            }

                            {
                                user.home_town && <>

                                    <div className="itemContent">
                                        <a>
                                            <IoLocationSharp />
                                            <span>{user.home_town}</span>
                                        </a>
                                        <button onClick={() => setShowHome(true)} className="edit"><MdEdit/></button>
                                    </div>


                                </>
                            }


                            {
                                showHome && <QuickUpdate hide={setShowHome} save={handleAddHome} data={{
                                    data:home,
                                    setData:setHome,
                                    placeholder:"Enter your home town"
                                }} />
                            }


                        </div>
                        <div className="item">
                            <div className="title">
                                <span>Relationship</span>
                            </div>


                            {
                                !user.relationShipStatus && !relationShow && <>

                                    <div className="itemContent">
                                        <a onClick={()=>setRelationShow(!relationShow)}>
                                            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/OcOuC5vm3rq.png" alt=""/>
                                            <span>Add a relationship status</span>
                                        </a>
                                    </div>

                                </>
                            }

                            {
                                user.relationShipStatus && <>

                                    <div className="itemContent">
                                        <a>
                                            <FaHeart />
                                            <span>{user.relationShipStatus}</span>
                                        </a>
                                        <button onClick={() => setRelationShow(true)} className="edit"><MdEdit/></button>
                                    </div>

                                </>
                            }

                            {
                                relationShow && <>

                                <div className="relation">
                                    <select value={relationShipStatus} onChange={handleRelation} className="form-control" name="" id="">
                                        <option value="Married">Married</option>
                                        <option value="Single">Single</option>
                                        <option value="In a relationship">In a relationship</option>
                                    </select>
                                    <div className="button">
                                        <button onClick={()=>setRelationShow(false)} className="cancel">Cancel</button>
                                        <button onClick={handleRelationData} className="save">Save</button>
                                    </div>
                                </div>


                                </>
                            }


                        </div>
                        <div className="modalFooter">
                            <div className="modalFooterWrapper">
                                <div className="textLink">
                                    <a href="">Update your information</a>
                                </div>
                                <div className="button">
                                <button onClick={()=>setModal(false)} className="cancel">Cancel</button>
                                    <button className="save">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </FbModal>
            }
            <div className="leftPart">
                <div className="topPart">
                    <div className="text">
                        <h3>Intro</h3>
                    </div>
                    {user.bio &&

                        <>
                            <p className="heading">{user.bio}</p>
                            <button className="bio" onClick={handleBioShow}>Edit bio</button>
                        </>
                    }

                    {!user.bio &&

                        <>
                            <button className="bio" onClick={handleBioShow}>Add bio</button>
                        </>
                    }
                    {
                        bioShow && <div className="addBioArea">
                            <textarea onChange={handleBioChange} placeholder="Describe who you are"
                                      name="">{user.bio}</textarea>
                            <div className="bottomPart">
                                <a href=""><FaGlobeAmericas/> Public</a>
                                <span>{bioCount} character remaining</span>
                            </div>
                            <div className="buttonArea">
                                <button onClick={handleBioShow} className="cancel">Cancel</button>
                                <button onClick={handleBioUpdate}  className='save'>Save</button>
                            </div>
                        </div>
                    }


                    <div className="item">
                        <a href=""><HiExclamationCircle className="icon"/></a>
                        <p className="subtitle">Profile- {user.category}</p>
                    </div>

                    {
                        user.work.map((item, index) =>

                            <div className="item">
                                <a href=""><FaBriefcase className="icon"/></a>
                                <p className="subtitle">{item.position} of {item.company}</p>
                            </div>
                        )
                    }


                    <div className="item">
                        <a href=""><FaLayerGroup className="icon"/></a>
                        <p className="subtitle">Went to {user.school}</p>
                    </div>
                    <div className="item">
                        <a href=""><FaLayerGroup className="icon"/></a>
                        <p className="subtitle">University- {user.university}</p>
                    </div>
                    <div className="item">
                        <a href=""><FaHouseCircleCheck className="icon"/></a>
                        <p className="subtitle">Lives in {user.living}</p>
                    </div>
                    <div className="item">
                        <a href=""><IoLocationSharp className="icon"/></a>
                        <p className="subtitle">from {user.home_town}</p>
                    </div>
                    <div className="item">
                        <a href=""><FaHeart className="icon"/></a>
                        <p className="subtitle">{user.relationShipStatus}</p>
                    </div>
                    <div className="item">
                        <a href=""><BsCalendar2DateFill className="icon"/></a>
                        <p className="subtitle">Join- February, 2010</p>
                    </div>
                    <div className="item">
                        <a href=""><MdOutlineDriveFileRenameOutline className="icon"/></a>
                        <p>_shahnewaj_</p>
                    </div>

                    <button onClick={() => setModal(!modal)} className="details">Edit detail</button>
                    <div className="hobbies">
                        <div className="item">
                            <a href="">
                                <FcGlobe/>
                                <span>Travelling</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <FcGlobe/>
                                <span>Travelling</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <FcGlobe/>
                                <span>Travelling</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <FcGlobe/>
                                <span>Travelling</span>
                            </a>
                        </div>
                        <div className="item">
                            <a href="">
                                <FcGlobe/>
                                <span>Travelling</span>
                            </a>
                        </div>
                    </div>
                    <button className="hobbies">Edit hobbies</button>
                    <div className="features">



                        {
                            user.featured.map((slider, index) =>{
                                return (
                                    slider.map((item, index) =>
                                        <a onClick={() => setPopUpShow(!popUpShow)}>
                                            <div className="item">
                                                <img src={`featured/${item}`} alt=""/>
                                            </div>
                                        </a>
                                    )
                                )
                            })
                        }


                    </div>

                    {
                        featuredShow && <FbModal back={false} title={'Edit Feature'} modalPopUp={setFeaturedShow}>
                        <div className="uploadIntro">
                                    <img src={featureIntro} alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, ullam?</p>
                                    <button onClick={handleUploadShow}>Add New</button>
                                </div>
                        </FbModal>
                    }

                    {
                        featureUploadShow && <FbModal modalChange={handleModalBack} back={true} title="Edit featured collection" modalPopUp={setFeatureUploadShow}>
                                    <div className="uploadItem">
                                        <label  className="uploadButton" htmlFor="uploadImg">Uploads Photos</label>
                                        <input onChange={handlePhotoPreview} id="uploadImg" multiple={true} style={{display:'none'}} type="file"/>
                                        <form onSubmit={handleFeaturedPhoto} method="post" encType="multipart/form-data">
                                        <div className="formItem">
                                            {
                                                featurePre.map((item, index) =>{
                                                    let url = URL.createObjectURL(item)
                                                    return (
                                                        <div className="previewImg">
                                                            <img src={url} alt=""/>
                                                            <div className="checkBox">
                                                                <input onChange={(e)=>handleCheckBoxChange(e)}
                                                                       checked={featureChecked.includes(item)} name="featured" value={item.name} className="check"
                                                                       type="checkbox"/>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                            {
                                                featurePre.length > 0 &&
                                                <button type="submit" className="btn btn-success">Save</button>
                                            }


                                        </form>
                                    </div>
                        </FbModal>
                    }

                    <button onClick={() => setFeaturedShow(!featuredShow)} className="hobbies">Add features</button>
                </div>
                {
                    popUpShow && <PopupFullWidth setPopUpClose={setPopUpShow}>
                        <StorySlider setPopUpClose={setPopUpShow} />
                    </PopupFullWidth>
                }
                <div className="galleryContainer">
                    <div className="topPart">
                        <p>Photos</p>
                        <a href="">See all photos</a>
                    </div>
                    <a onClick={()=>setPhotoShow(!photoShow)}>
                        <div className="item">
                        <img src={gallery} alt="" className="galleryItem"/>
                        </div>
                    </a>


                    {
                        photoShow && <>

                        <PopupFullWidth setPopUpClose={setPopUpShow}>
                            <Gallery setPopUpClose={setPopUpShow}></Gallery>
                        </PopupFullWidth>

                        </>
                    }



                </div>
                <div className="galleryContainer">
                    <div className="topPart">
                        <div className="friends">
                            <p>Friends</p>
                            <span>120 mutual friends</span>
                        </div>
                        <a href="">See all friends</a>
                    </div>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                    <a href="">
                        <div className="item">
                            <img src={friend} alt="" className="galleryItem"/>
                            <span>Bushra Akter</span>
                        </div>
                    </a>
                </div>
            </div>


        </>
    );
};

export default ProfileIntro;