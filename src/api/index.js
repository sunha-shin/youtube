import {fetch} from "../lib/fetch";

const API = {
    getVideo:(data) =>  fetch.get('/videos', data),
    getSearchResult:(data) =>  fetch.get('/search', data),
    getVideoById:(data) =>  fetch.get(`/videos`, data),
    getComments:(data) =>  fetch.get(`/commentThreads`, data),
    getChannels:(data) => fetch.get(`/channels`, data)
}

export default API;