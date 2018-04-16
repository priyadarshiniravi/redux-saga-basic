import { RECEIVE_RESPONSE } from "../actions";

export default (state = "", { type, text = "" }) => {
    switch (type) {
        case RECEIVE_RESPONSE:
            return text;
        default:
            return state;
    }
};