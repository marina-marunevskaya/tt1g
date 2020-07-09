import { API_KEY, API_URL } from '../config';

const axios = require('axios');

const api = axios.create({
    timeout: 10000
});

export const apiSearch = ({ searchValue, page }) => api.get(
    API_URL,
    {
        params: {
            apikey: API_KEY,
            page,
            s: searchValue
        }
    }
);
