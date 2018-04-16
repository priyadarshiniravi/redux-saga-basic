import {call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_PROFILE, receive } from "../actions";
import {fetchData} from "../api"

function* fetchApiData() {
    try {
        const data = yield call(fetchData);
        yield put(receive(data));
    } catch (e) {
        console.log(e);
        yield put(receive("Something Went Wrong"));
    }
}

export function* profileSaga() {
    yield takeLatest(REQUEST_PROFILE, fetchApiData);
}