import React from 'react';
import './../../assets/sass/style.scss';
import { RxCross2 } from "react-icons/rx";
import { MdArrowBack } from "react-icons/md";

const FbModal = ({title, children, setImage, modalPopUp, back, modalChange}) => {
    const handleModalClose = () => {
        modalPopUp(false)

        if(setImage){
            setImage('')
        }

    }
    return (
        <>
            <div className="modalBlur">
                <div className="modalWrapper">
                    <div className="modalContainer">
                        <div className="modalTop">
                            <div className="title">
                                {
                                    back && <a onClick={modalChange} className="back" ><MdArrowBack/></a>
                                }
                                <span>{title}</span>
                                {
                                    !back && <a className="cross" onClick={handleModalClose}><RxCross2/></a>
                                }

                            </div>
                            <div className="Fb-underline"></div>
                        </div>
                        <div className="modalBody">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default FbModal;