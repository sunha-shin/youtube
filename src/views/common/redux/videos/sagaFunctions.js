import {all} from "redux-saga/effects";
import API from "../../../../api";

export const recomposeWithChannel = function* (data) {
    const result = yield all(data.map(async (item) => {
        const channelId = item.snippet?.channelId;
        const channelResult = await API.getChannels({
            part: 'snippet',
            id: channelId,
        });

        return {
            ...item,
            channel: channelResult.data
        }
    }))

    return result
}