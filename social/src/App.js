import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import ForgotPassword from "./pages/Auth/forgotPassword";
import Activation from "./pages/Auth/Activation";
import ForgotFindAccount from "./pages/Auth/ForgotFindAccount";
import ChangePassword from "./pages/Auth/ChangePassword";
import LoadingBar from 'react-top-loading-bar'
import {useDispatch, useSelector} from "react-redux";
import {LOADER_END} from "./redux/topLoader/loaderActionType";
import AuthRedirect from "./privateRoute/authRedirect";
import {useEffect} from "react";
import {tokenUserLogin} from "./redux/auth/AuthAction";
import NotAuthRedirect from "./privateRoute/notAuthRedirect";
import Friends from "./pages/Friends/Friends";
import './assets/sass/style.scss';

function App() {

    const loader = useSelector(state=>state.loader);
    const loaderDispatch = useDispatch();
    const loginDispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        loginDispatch(tokenUserLogin(navigate))
    }, [loginDispatch]);


  return (
   <>

       <LoadingBar
           color='#0866FF'
           progress={loader}
           onLoaderFinished={()=>loaderDispatch({
               type:LOADER_END
           })}
       />

       <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
       />
       
       <Routes>

            <Route path="/" element={<Home />}></Route>
           <Route element={<AuthRedirect />}>
               <Route path="/profile" element={<Profile />}></Route>
               <Route path="/friends" element={<Friends/>}></Route>
           </Route>

           <Route element={<NotAuthRedirect />}>
               <Route path="/auth" element={<Auth />}></Route>
               <Route path="/forgot" element={<ForgotPassword />}></Route>
               <Route path="/find" element={<ForgotFindAccount />}></Route>
               <Route path="/activation/:type" element={<Activation />}></Route>
               <Route path="/change-password" element={<ChangePassword />}></Route>
           </Route>

       </Routes>


   </>
  );
}

export default App;
