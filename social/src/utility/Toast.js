import {toast} from "react-toastify";


export const notifySuccess = (msg) => {
    return toast.success(msg)
}



export const notifyError = (msg) => {
    return toast.error(msg)
}