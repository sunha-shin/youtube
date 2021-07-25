import {API_KEY, BASE_URL} from "../constants";
import axios from "axios";
import {toast} from "react-toastify";

export const RequestConstants = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
}

const config = {
    baseURL: BASE_URL
}

const axiosInstance = axios.create(config);

export const request = async (method, url, data) => {
    try {
        let config = {
            url,
            method
        }

        if (method === RequestConstants.GET) {
            config.params = data;
            config.params.key= API_KEY;
        } else {
            config.data = data;
        }

        // axiosInstance.defaults.headers.common['Authorization'] = `Bearer `;

        return await axiosInstance(config);

    } catch (err) {
        toast(err.response.status)
        console.log('@@ err', err);
        return err;
    }
};

export const fetch = {
    get:(url, data) => request(RequestConstants.GET, url, data),
    post:(url, data) => request(RequestConstants.POST, url, data),
    put:(url, data) => request(RequestConstants.PUT, url, data),
    delete:(url, data) => request(RequestConstants.DELETE, url, data),
}