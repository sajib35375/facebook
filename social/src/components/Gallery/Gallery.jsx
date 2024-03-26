import React, {useEffect, useState} from 'react';
import bgcOne from './../../assets/slider/4k-space-9w27dqmc4nrs3xwd.jpg';
import bgcTwo from './../../assets/slider/74758.jpg';
import bgcThree from './../../assets/slider/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg';
import bgcFour from './../../assets/slider/pexels-sohail-nachiti-807598.jpg';
import {useSelector} from "react-redux";

const Gallery = () => {

    const {user} = useSelector(state=>state.auth)
    const [count, setCount] = useState(0);

    let num = [];
    user.featured.map((item, index)=>{
        for(let i=0; i<= index; i++ ) {

            item.map((number, k) => {
                setInterval(() => {
                    
                }, 1000)
            })

        }
    })


    return (
        <>

            <div className="galleryContainer">
                <div className="imageContainer">
                    <div className="image" style={{marginLeft:'-10%'}}>
                        <img src={bgcOne} alt=""/>
                    </div>
                    <div className="image">
                        <img src={bgcTwo} alt=""/>
                    </div>
                    <div className="image">
                        <img src={bgcThree} alt=""/>
                    </div>
                    <div className="image">
                        <img src={bgcFour} alt=""/>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Gallery;