import React from 'react';
import {useSelector} from "react-redux";

const Avatar = () => {

    const {user} = useSelector(state=>state.auth)


    return (
        <>


                <img src={user.photo ? user.photo : 'https://i.pinimg.com/736x/bb/e3/02/bbe302ed8d905165577c638e908cec76.jpg'} alt=""/>



        </>
    );
};

export default Avatar;