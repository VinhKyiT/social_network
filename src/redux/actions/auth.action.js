import {
  GET_AUTH_STATUS,
  GET_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from '../constants/auth.constant';

export const signupRequest = (payload, onSuccess) => ({
  type: SIGNUP_REQUEST,
  payload,
  onSuccess,
});
export const signupSuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload,
});
export const signupFailed = payload => ({
  type: SIGNUP_FAILED,
  payload,
});
export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload,
});
export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});
export const loginFailed = payload => ({
  type: LOGIN_FAILED,
  payload,
});
export const getUser = payload => ({
  type: GET_USER,
  payload,
});
export const getAuthStatus = payload => ({
  type: GET_AUTH_STATUS,
  payload,
});
export const logout = payload => ({
  type: LOGOUT,
  payload,
});
export const updateUserRequest = (payload, onSuccess, onFailed) => ({
  type: UPDATE_USER_REQUEST,
  payload,
  onSuccess,
  onFailed,
});
export const updateUserSuccess = payload => ({
  type: UPDATE_USER_SUCCESS,
  payload,
});
export const updateUserFailed = payload => ({
  type: UPDATE_USER_FAILED,
  payload,
});
