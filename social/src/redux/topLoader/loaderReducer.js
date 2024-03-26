import {loaderInitialState} from "./initialState";
import {LOADER_END, LOADER_START} from "./loaderActionType";


const loaderReducer = (state=loaderInitialState, {type,payload}) => {
    switch (type) {
        case LOADER_START:
            return 100;


        case LOADER_END:
            return 0;

        default:
            return state;
    }
}


export default loaderReducer;