import React, {useEffect, useState} from 'react';
import {Featured} from "../Featured";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const StorySlider = ({setPopUpClose}) => {

    const [featured, setFeatured] = useState(0);

    useEffect(() => {
        let timeIterval = setTimeout(()=>{
            setFeatured((featured+1) % Featured.length )
        },3000)

        return ()=>clearTimeout(timeIterval);
    }, [featured]);

    const handleNext = (e) => {
        e.preventDefault();
        setFeatured((featured +1) % Featured.length)
    }

    const handlePrevious = (e) => {
        e.preventDefault()
        if(featured ===0){
            setFeatured(Featured.length-1)
        }else{
            setFeatured((featured-1) %  Featured.length)
        }

    }


    return (
        <>

            <div className="item" style={{backgroundImage: `url(${Featured[featured].photo})`}}>
                {
                    Featured.map((item, index) =>
                        <div className="progressBar">
                            <div
                                className={`progress ${featured === index && 'active'} ${featured > index && 'viewed'}`}></div>
                        </div>
                    )
                }

            </div>
            <div className="navigation">
                <div className="prev">
                    <button onClick={handlePrevious}><MdOutlineKeyboardArrowLeft/></button>
                </div>
                <div className="next">
                    <button onClick={handleNext}><MdKeyboardArrowRight/></button>
                </div>
            </div>

        </>
    );
};

export default StorySlider;