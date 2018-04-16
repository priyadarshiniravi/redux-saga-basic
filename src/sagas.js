import {put, takeLatest } from "redux-saga/effects";

import { REQUEST_CALL, receive } from "./actions";

function* helloWorld(action) {
    try {//Make API Call here
        yield put(receive("Hello world from redux saga!"));
    } catch (e) {
        yield put(receive("Something Went Wrong"));
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_CALL, helloWorld);
}