import axios from 'axios';

export const api = axios.create({
    baseURL: "https://rocketnotes-api-i9fg.onrender.com"
});