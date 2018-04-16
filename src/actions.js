export const REQUEST_PROFILE = "REQUEST_PROFILE";
export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

export const request = () => ({ type: REQUEST_PROFILE });
export const receive = text => ({ type: RECEIVE_PROFILE, text });