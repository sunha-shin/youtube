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
        if (_.isEmpty(result.data)) return "null"

        for (const item of result.data.items) {
            const channelId = item.snippet?.channelId;
            const channelResult = yield call(API.getChannels,
                {
                    part: "snippet, statistics",
                    id: channelId
                }
            );
            const channelInfo = channelResult?.data?.items?.[0];
            item.channelInfo = channelInfo;
        }
        yield put(Action.Creators.setVideoById(id, result.data.items));

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
        if (_.isEmpty(result.data)) return "null"
        yield put(Action.Creators.setComments(id, result.data.items));

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
        takeLatest(Action.Types.GET_VIDEO_DETAIL, getVideoDetailWorker),
    ])
}

export default sagas;