import axios, { AxiosInstance } from "axios";

const API = (baseUrl?: string): AxiosInstance => axios.create({
    baseURL: baseUrl || "localhost:8081",
    withCredentials: false,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: TIMEOUT_LIMIT,
});

export default API;
export const source = axios.CancelToken.source();

const TIMEOUT_LIMIT = 5 * 1000;