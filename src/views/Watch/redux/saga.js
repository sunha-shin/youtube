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

function* getCommentsWorker({payload}) {
    try {
        const result = yield call(API.getComments, payload);
        if (!_.isEmpty(result.data)) {
            yield put(Action.Creators.setComments(result.data))
        }
    } catch (err) {
        console.log('@@ err', err);
    }
}

function* getRecommendVideoWorker({payload}) {
    try {
        const result = yield call(API.getVideo, payload)
        if (!_.isEmpty(result.data)) {
            yield put(Action.Creators.setRecommendVideos(result.data))
        }
    } catch (err) {
        console.log('@@ err', err);
    }

}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoByIdWorker),
        takeLatest(Action.Types.GET_COMMENTS, getCommentsWorker),
        takeLatest(Action.Types.GET_RECOMMEND_VIDEOS, getRecommendVideoWorker),
    ])
}

export default sagas;