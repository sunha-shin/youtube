import {fetch} from "../lib/fetch";

const API = {
    getVideo:(data) =>  fetch.get('/videos', data),
    getSearchResult:(data) =>  fetch.get('/search', data),
}

export default API;