import {takeLatest, call, all, put} from 'redux-saga/effects';
import {Action} from "./redux";
import API from "../../../../api";
import _ from 'lodash';

function* getVideoWorker({payload}) {
    try {
        const result = yield call(API.getVideo, payload)
        console.log("@@ result.data", result.data)
        if(!_.isEmpty(result.data)) {
            yield put(Action.Creators.setVideo(result.data))
        }

    } catch (err) {
        console.log('@@ err', err);
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_VIDEO, getVideoWorker),
    ])
}

export default sagas;