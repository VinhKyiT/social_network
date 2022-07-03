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

const initialState = {
  user: {},
  isLoggedIn: false,
  access_token: {},
  refresh_token: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { ...state };
    case SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case SIGNUP_FAILED:
      return { ...state };
    case LOGIN_REQUEST:
      return { ...state };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload?.data?.user,
        access_token: action.payload?.data?.token?.access,
        refresh_token: action.payload?.data?.token?.refresh,
        isLoggedIn: true,
      };
    case LOGIN_FAILED:
      return { ...state };
    case GET_USER:
      return { ...state };
    case GET_AUTH_STATUS:
      return { ...state };
    case LOGOUT:
      return {
        ...state,
        user: {},
        access_token: {},
        refresh_token: {},
        isLoggedIn: false,
      };
    case UPDATE_USER_REQUEST:
      return { ...state };
    case UPDATE_USER_SUCCESS:
      return { ...state, user: { ...state.user, ...action.payload } };
    case UPDATE_USER_FAILED:
      return { ...state };
    default:
      return state;
  }
};

export { authReducer };
