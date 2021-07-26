import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../../api";
import _ from "lodash";
import {Action} from "./redux";

function* getVideoByIdWorker({payload}) {
    try {
        const result = yield call(API.getVideoById, payload);
        if (!_.isEmpty(result.data)) {
            yield put(Action.Creators.setVideoById(result.data.items));
        }
    } catch (err) {
        console.log('@@ err', err);
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoByIdWorker),
    ])
}

export default sagas;