import React, {useState} from 'react';
import {FaGlobeAmericas} from "react-icons/fa";
import './../../assets/sass/style.scss';

const QuickUpdate = ({hide, data, info, save}) => {
    const handleCategoryHide = (e) => {
        e.preventDefault();
        hide(false)
    }

    return (
        <>

            <div className="addBioArea">
                {
                    data && <textarea placeholder={data.placeholder} onChange={(e) => data.setData(e.target.value)}
                                      name="">{data.data}</textarea>
                }

                {
                    info && <textarea placeholder={info.placeholder} onChange={(e) => info.setData(e.target.value)}
                                      name="">{info.data}</textarea>
                }
                <div className="bottomPart">
                    <a href=""><FaGlobeAmericas/> Public</a>
                    <span>character remaining</span>
                </div>
                <div className="buttonArea">
                    <button onClick={handleCategoryHide} className="cancel">Cancel</button>
                    <button onClick={save}  className='save'>Save</button>
                </div>
            </div>


        </>
    );
};

export default QuickUpdate;