import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../../api";
import _ from "lodash";
import {Action} from "./redux";

function* getVideoByIdWorker({id}) {
    try {
        const result = yield call(API.getVideoById, {
            part: `snippet, statistics`,
            id
        });

        console.log("@@ getVideoByIdWorker result", result)
        if (_.isEmpty(result.data)) return "null"
        yield put(Action.Creators.setVideoById(result.data.items));

    } catch (err) {
        console.log('@@ err', err);
    }
}

function* getCommentsWorker({id}) {
    try {
        const result = yield call(API.getComments, {
            part: 'snippet',
            videoId: id
        });
        console.log("@@ get Comments Worker result", result)
        if (_.isEmpty(result.data)) return "null"
        yield put(Action.Creators.setComments(result.data));

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

function* getVideoDetailWorker(payload) {
    const videoId = payload.payload.id;
    yield put(Action.Creators.getVideoById(videoId));
    yield put(Action.Creators.getComments(videoId));
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoByIdWorker),
        takeLatest(Action.Types.GET_COMMENTS, getCommentsWorker),
        takeLatest(Action.Types.GET_RECOMMEND_VIDEOS, getRecommendVideoWorker),
        takeLatest(Action.Types.GET_VIDEO_DETAIL, getVideoDetailWorker),
    ])
}

export default sagas;