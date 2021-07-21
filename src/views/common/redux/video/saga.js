import {takeLatest, call, all, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../../../api";
import _ from 'lodash';

function* getVideoWorker({payload}) {
    try {
        const result = yield call(API.getVideo, payload)
        if(!_.isEmpty(result.data)) {
            yield put(Action.Creators.setVideo(result.data))
        }

    } catch (err) {
        console.log('@@ err', err);
    }
}

function* getVideoByIdWorker({payload}) {
    try {
        const result = yield call(API.getVideoById, payload);
        if(!_.isEmpty(result.data)) {
            yield put(Action.Creators.setVideoById(result.data.items));
        }
    } catch(err) {
      console.log('@@ err', err);
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_VIDEO, getVideoWorker),
        takeLatest(Action.Types.GET_VIDEO_BY_ID, getVideoByIdWorker),
    ])
}

export default sagas;