import {fetch} from "../lib/fetch";

const API = {
    getVideo:(data) =>  fetch.get('/videos', data),
    getSearchResult:(data) =>  fetch.get('/search', data),
    getVideoById:(data) =>  fetch.get(`/watch`, data),
}

export default API;