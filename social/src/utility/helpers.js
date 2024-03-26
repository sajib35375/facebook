import {isEmail, isMobile} from "./validate";


export const dataShow = (data) => {
    if (isEmail(data)){
        const firstData = data.split('@')[0];
        const secondData = data.split('@')[1];

        const emailData = firstData.substr(0, 2);

        return `${emailData} ****** ${secondData}`
    }

    if (isMobile(data)){
        const firstData = data.substr(0,2);
        const secondData = data.substr(-2, 2);

        return `${firstData}******${secondData}`
    }
}