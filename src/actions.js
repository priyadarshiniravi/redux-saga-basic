export const REQUEST_CALL = "REQUEST_CALL";
export const RECEIVE_RESPONSE = "RECEIVE_RESPONSE";

export const request = () => ({ type: REQUEST_CALL });
export const receive = text => ({ type: RECEIVE_RESPONSE, text });