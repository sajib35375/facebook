import React, {useEffect} from 'react';

const UsePopupClose = (ref, setRef) => {
    useEffect(() => {

        document.addEventListener('mousedown',function (e){

            if (ref.current && !ref?.current?.contains(e.target)){
                setRef(false)
            }
        })


    }, [ref.current]);
};

export default UsePopupClose;