import React, {useEffect, useState} from 'react';
import axios from "axios";

const UseData = (url = null) => {
    const [data, setData] = useState([]);
    useEffect(() => {

        if (url){
            axios.get(url).then(res=>{
                setData(res.data)
            })
        }

    }, [url]);
    return [data, setData]
};

export default UseData;