import {takeLatest, call, all, put} from 'redux-saga/effects'
import {Action} from "./redux";
import API from "../../../api";
import _ from 'lodash';

function* getSearchResultWorker({payload}) {
    try {
        const result = yield call(API.getSearchResult, payload)

        if (_.isEmpty(result.data)) return "null"

        // for (const item of result.data.items) {
        //     const channelId = item.snippet?.channelId;
        //     const channelResult = yield call(API.getChannels,
        //         {
        //             part: "snippet, statistics",
        //             id: channelId
        //         }
        //     );
        //     const channelInfo = channelResult?.data?.items?.[0];
        //     item.channelInfo = channelInfo;
        // }

        yield put(Action.Creators.setSearchResult(result.data))
        console.log("@@ search result.data", result.data)


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