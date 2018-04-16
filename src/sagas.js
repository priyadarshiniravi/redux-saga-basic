import {call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_CALL, receive } from "./actions";
import {fetchData} from "./api"

function* fetchApiData(action) {
    try {//Make API Call here
        const data = yield call(fetchData)
        yield put(receive(data));
    } catch (e) {
        console.log(e);
        yield put(receive("Something Went Wrong"));
    }
}

export default function* mySaga() {
    yield takeLatest(REQUEST_CALL, fetchApiData);
}