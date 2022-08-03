import axios from 'axios';

//apply base url for axios
const REACT_APP_API_URL = 'http://139.59.103.50:5000';

const axiosApi = axios.create({
  baseURL: REACT_APP_API_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}

export const API_URL = 'http://139.59.103.50:5000';

