import React, {useState} from 'react';
import './../../assets/sass/style.scss';
import facebookLogo from './../../assets/images/facebook.svg';
import { AiTwotonePlusSquare } from "react-icons/ai";
import { Modal} from "react-bootstrap";
import { FaRegQuestionCircle } from "react-icons/fa";
import {notifyError} from "../../utility/Toast";
import {registerSuccess, userLogin} from "../../redux/auth/AuthAction";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const Auth = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [input, setInput] = useState({
        first_name : '',
        sur_name : '',
        mobileOrEmail : '',
        password : '',
        date : '',
        month: '',
        year : '',
        gender: ''

    });

    const handleInputChange = (e) => {
        setInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const [validate, setValidate] = useState({
        first_name : true,
        sur_name : true,
        mobileOrEmail : true,
        password : true,
        date : true,
        month: true,
        year : true
    });


    const handleInputValidate = (e) => {
        const fieldName = e.target.name;
        if (!input[fieldName]){
            setValidate((prev)=>({
                ...prev,
                [fieldName] : false
            }))
        }else{
            setValidate((prev)=>({
                ...prev,
                [fieldName] : true
            }))
        }
    }


    const handleRegisterForm = (e) => {
        e.preventDefault();

        if (!input.first_name || !input.sur_name || !input.mobileOrEmail || !input.password || !input.date || !input.month || !input.year || !input.gender){
            notifyError("All fields are required")
        }else{

            // let data = new FormData();
            // data.append('first_name', input.first_name)
            // data.append('sur_name', input.sur_name)
            // data.append('email', input.mobileOrEmail)
            // data.append('password', input.password)
            // data.append('birth_date', input.date)
            // data.append('birth_month', input.month)
            // data.append('birth_year', input.year)
            // data.append('gender', input.gender)


            dispatch(registerSuccess({
                first_name : input.first_name,
                sur_name : input.sur_name,
                auth : input.mobileOrEmail,
                password : input.password,
                birth_date : input.date,
                birth_month : input.month,
                birth_year : input.year,
                gender : input.gender,
            },e, setInput, setShow, navigate))

        }
    }


    ////////////////////Login//////////////////////////////

    const [loninInput, setLoginInput] = useState({
        auth: '',
        password: ''
    })

    const handleLoginInput = (e) => {
        setLoginInput((prev)=>({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }


    const handleLoginForm = (e) => {
        e.preventDefault();

        dispatch(userLogin({
            auth: loninInput.auth,
            password: loninInput.password
        }, navigate))
    }


    return (
       <>
        <div className="authContainer">
            <div className="logoContent">
                <img src={facebookLogo} alt=""/>
                <h3>Facebook helps you connect and share with the people in your life.</h3>
            </div>
            <div className="loginContent">
                <div className="loginForm">
                    <form onSubmit={handleLoginForm} method="POST">
                        <div className="inputGroup">
                            <input name="auth" value={loninInput.auth} onChange={handleLoginInput} placeholder="Email address and phone number" type="text"/>
                            <input name="password" value={loninInput.password} onChange={handleLoginInput} placeholder="Password" type="password"/>
                            <button type="submit">Log in</button>
                        </div>
                        <div className="formFooter">
                            <Link to="/forgot">Forgotten password?</Link>
                            <div className="underline"></div>
                            <button type="button" onClick={handleShow}>Create new account</button>
                        </div>
                    </form>
                </div>
                <div className="loginFormFooter">
                    <p><a href="">Create a Page</a> for a celebrity, brand or business.</p>
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


           <div className="register">
               <Modal centered show={show} onHide={handleClose} animation={false} >
                   <Modal.Header closeButton className="modalHeader">
                       <Modal.Title className="modalTitle">
                           <h2>Sign Up</h2>
                           <p>It's quick and easy.</p>
                       </Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                       <form onSubmit={handleRegisterForm} method="POST">
                           <div className="inputGroup">
                               <div className="userName">
                                   <input name="first_name" value={input.first_name} className={!validate.first_name && 'error-field'}
                                          onBlur={handleInputValidate} onChange={handleInputChange}
                                          placeholder="First Name" type="text"/>
                                   <input name="sur_name" className={!validate.sur_name && 'error-field'}
                                          onBlur={handleInputValidate} onChange={handleInputChange}
                                          placeholder="SurName" type="text"/>
                               </div>
                               <input name="mobileOrEmail" value={input.mobileOrEmail} className={!validate.mobileOrEmail && 'error-field'}
                                      onBlur={handleInputValidate} onChange={handleInputChange}
                                      placeholder="Mobile number or email address" type="text"/>
                               <input name="password" className={!validate.password && 'error-field'}
                                      onBlur={handleInputValidate} onChange={handleInputChange}
                                      placeholder="New password" type="password"/>
                           </div>
                           <div className="birthInfo">
                               <span>Date of birth <FaRegQuestionCircle className="icon"/></span>
                               <div className="birthSelect">
                                   <select value={input.date} className={!validate.date && 'error-field'} onBlur={handleInputValidate}
                                           onChange={handleInputChange} name="date" id="">
                                       <option value="1">1</option>
                                       <option value="2">2</option>
                                       <option value="3">3</option>
                                       <option value="4">4</option>
                                       <option value="5">5</option>
                                       <option value="6">6</option>
                                       <option value="7">7</option>
                                       <option value="8">8</option>
                                       <option value="9">9</option>
                                       <option value="10">10</option>
                                       <option value="11">11</option>
                                       <option value="12">12</option>
                                       <option value="13">13</option>
                                       <option value="14">14</option>
                                       <option value="15">15</option>
                                       <option value="16">16</option>
                                       <option value="17">17</option>
                                       <option value="18">18</option>
                                       <option value="19">19</option>
                                       <option value="20">20</option>
                                       <option value="21">21</option>
                                       <option value="22">22</option>
                                       <option value="23">23</option>
                                       <option value="24">24</option>
                                       <option value="25">25</option>
                                       <option value="26">26</option>
                                       <option value="27">27</option>
                                       <option value="28">28</option>
                                       <option value="29">29</option>
                                       <option value="30">30</option>
                                       <option value="31">31</option>
                                   </select>
                                   <select value={input.month} className={!validate.month && 'error-field'} onBlur={handleInputValidate}
                                           onChange={handleInputChange} name="month" id="">
                                       <option value="Jan">Jan</option>
                                       <option value="Feb">Feb</option>
                                       <option value="Mar">Mar</option>
                                       <option value="Apr">Apr</option>
                                       <option value="May">May</option>
                                       <option value="Jun">Jun</option>
                                       <option value="Jul">Jul</option>
                                       <option value="Aug">Aug</option>
                                       <option value="Sep">Sep</option>
                                       <option value="Oct">Oct</option>
                                       <option value="Nov">Nov</option>
                                       <option value="Dec">Dec</option>
                                   </select>
                                   <select value={input.year} className={!validate.year && 'error-field'} onBlur={handleInputValidate}
                                           onChange={handleInputChange} name="year" id="">
                                       <option value="1980">1980</option>
                                       <option value="1981">1981</option>
                                       <option value="1982">1982</option>
                                       <option value="1983">1983</option>
                                       <option value="1984">1984</option>
                                       <option value="1985">1985</option>
                                       <option value="1986">1986</option>
                                       <option value="1987">1987</option>
                                       <option value="1988">1988</option>
                                       <option value="1989">1989</option>
                                       <option value="1990">1990</option>
                                       <option value="1991">1991</option>
                                       <option value="1992">1992</option>
                                       <option value="1993">1993</option>
                                       <option value="1994">1994</option>
                                       <option value="1995">1995</option>
                                       <option value="1996">1996</option>
                                       <option value="1997">1997</option>
                                       <option value="1998">1998</option>
                                       <option value="1999">1999</option>
                                       <option value="2000">2000</option>
                                       <option value="2001">2001</option>
                                       <option value="2002">2002</option>
                                       <option value="2003">2003</option>
                                       <option value="2003">2004</option>
                                       <option value="2005">2005</option>
                                       <option value="2006">2006</option>
                                       <option value="2007">2007</option>
                                       <option value="2008">2008</option>
                                       <option value="2009">2009</option>
                                       <option value="2010">2010</option>
                                       <option value="2011">2011</option>
                                       <option value="2012">2012</option>
                                       <option value="2013">2013</option>
                                       <option value="2014">2014</option>
                                       <option value="2015">2015</option>
                                       <option value="2016">2016</option>
                                       <option value="2017">2017</option>
                                       <option value="2018">2018</option>
                                       <option value="2019">2019</option>
                                       <option value="2020">2020</option>
                                       <option value="2021">2021</option>
                                       <option value="2022">2022</option>
                                       <option value="2023">2023</option>
                                       <option value="2024">2024</option>
                                   </select>
                               </div>
                           </div>
                           <div className="gender">
                               <span>Gender <FaRegQuestionCircle className="icon"/></span>
                               <div className="genderContainer">
                                   <div className="gender">
                                       <label htmlFor="male">
                                           Male
                                       </label>
                                       <input onChange={handleInputChange} id="male" value="Male" name="gender" type="radio"/>
                                   </div>
                                   <div className="gender">
                                       <label htmlFor="female">
                                           Female
                                       </label>
                                       <input onChange={handleInputChange} id="female" value="Female" name="gender" type="radio"/>
                                   </div>
                                   <div className="gender">
                                       <label htmlFor="custom">
                                           Custom
                                       </label>
                                       <input onChange={handleInputChange} id="custom" value="Custom" name="gender" type="radio"/>
                                   </div>
                               </div>
                           </div>
                           <div className="footerText">
                               <p>People who use our service may have uploaded your contact information to Facebook. <a
                                   href="">Learn more.</a></p>
                               <p>By clicking Sign Up, you agree to our <a href="">Terms</a>, <a href="">Privacy
                                   Policy</a> and <a
                                   href="">Cookies Policy</a>. You may receive SMS notifications from us and can opt out
                                   at any time.</p>
                           </div>
                           <div className="submitBtn">
                               <button type="submit" className="SignUpButton">Sign Up</button>
                           </div>
                       </form>
                   </Modal.Body>
               </Modal>
           </div>


       </>
    );
};

export default Auth;