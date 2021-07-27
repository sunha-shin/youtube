import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../../api";
import {Action} from "./redux";
import {mockData} from "./mock";
import {isDev} from "../../../lib/environment";
import _ from 'lodash';


function* getVideoWorker({payload}) {
    try {
        const result = yield call(API.getVideo, payload)
        if (!_.isEmpty(result.data)) {
            yield put(Action.Creators.setVideo(result.data))
        } else {
            if (isDev) {
                yield put(Action.Creators.setVideo(mockData))
            }
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