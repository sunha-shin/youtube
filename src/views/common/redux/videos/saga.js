import {all, call, put, takeLatest} from "redux-saga/effects";
import API from "../../../../api";
import _ from "lodash";
import {Action} from "./redux";

function* getRecommendVideoWorker({id, props}) {
    try {
        const result = yield call(API.getVideo, props);
        if (_.isEmpty(result.data)) return "null"
        yield put(Action.Creators.setRecommendVideos(id, result.data.items))
    } catch(err) {
      console.log('@@ err', err);
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_RECOMMEND_VIDEOS, getRecommendVideoWorker)
    ])
}

export default sagas;