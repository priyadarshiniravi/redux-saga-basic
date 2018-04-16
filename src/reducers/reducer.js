import { RECEIVE_PROFILE } from "../actions";

export default (state = "", { type, text = "" }) => {
    switch (type) {
        case RECEIVE_PROFILE:
            return text;
        default:
            return state;
    }
};