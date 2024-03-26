import React, {useEffect, useRef, useState} from 'react';
import './../../assets/sass/style.scss';
import Header from "../../components/header/Header";
import ProfileCover from "../../components/profileCover/ProfileCover";
import ProfileIntro from "../../components/profileIntro/ProfileIntro";
import ProfileTimeLine from "../../components/timeLine/ProfileTimeLine";

const Profile = () => {

    return (
        <>
            <Header />
            <ProfileCover />
            <div className="profileBodyContainer">
                <ProfileIntro />
                <ProfileTimeLine />
            </div>
        </>
    );
};

export default Profile;