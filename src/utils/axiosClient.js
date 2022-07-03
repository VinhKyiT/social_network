import axios from 'axios';
import {
  getToken,
  isTokenExpired,
  getRefreshTokenHelper,
  setToken,
  setRefreshToken,
} from '../helpers/tokenHelper';
import { refreshTokenApi } from '../services/apis/auth.api';
/**
 * Create an Axios Client with defaults
 */
let token;
getToken().then(res => (token = res));
const axiosClient = axios.create({
  baseURL: 'https://mockcourse.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
  timeout: 30000,
});
axiosClient.interceptors.request.use(async req => {
  if (!token) {
    token = await getToken();
    req.headers.Authorization = `Bearer ${token?.token}`;
  }
  const isExpired = isTokenExpired(token);
  if (!isExpired) {
    req.headers.Authorization = `Bearer ${token?.token}`;
    return req;
  }
  const refreshToken = await getRefreshTokenHelper();
  const response = await axios.post(
    refreshTokenApi({
      accessToken: token?.token,
      refreshToken: refreshToken?.token,
    }),
  );
  console.log('refresh token success:', response);
  setToken(response?.data?.access?.token);
  setRefreshToken(response?.data?.refresh?.token);
  req.headers.Authorization = `Bearer ${response?.data?.access?.token}`;
  return req;
});
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
export default axiosClient;
