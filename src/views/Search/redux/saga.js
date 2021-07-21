import {takeLatest, call, all, put} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../../api";
import _ from 'lodash';

function* getSearchResultWorker({payload}) {
    try {
        const result = yield call(API.getSearchResult, payload)
        console.log("@@ search result.data", result.data)
        if(!_.isEmpty(result.data)) {
            yield put(Action.Creators.setSearchResult(result.data))
        }
    } catch (err) {
        console.log('@@ err', err);
    }
}

function* sagas() {
    yield all([
        takeLatest(Action.Types.GET_SEARCH_RESULT, getSearchResultWorker)
    ])
}

export default sagas;