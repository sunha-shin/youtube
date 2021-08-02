import {all, call, put, takeLatest, select} from "redux-saga/effects";
import API from "../../../api";
import {Action} from "./redux";
import {mockData} from "./mock";
import {isDev} from "../../../lib/environment";
import _ from 'lodash';

function* getVideoWorker({payload}) {
    try {
        const result = yield call(API.getVideo, payload)
        if (!_.isEmpty(result.data)) {
            for (const item of result.data.items) {
                const channelId = item.snippet?.channelId;
                const channelResult = yield call(API.getChannels,
                    {
                        part: "snippet",
                        id: channelId
                    }
                );
                const channelThumbnail = channelResult?.data?.items?.[0]?.snippet?.thumbnails?.medium.url;
                item.snippet.channelThumbnail = channelThumbnail;
            }
            yield put(Action.Creators.setVideo(result.data));
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