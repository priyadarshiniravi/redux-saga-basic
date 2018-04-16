import {all, fork } from "redux-saga/effects";

import {profileSaga} from "./profile";

export default function* rootSaga() {
    yield all([fork(profileSaga)])
}