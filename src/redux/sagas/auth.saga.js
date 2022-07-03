import AsyncStorage from '@react-native-async-storage/async-storage';
import { call, fork, select, take, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGOUT,
  SIGNUP_REQUEST,
  UPDATE_USER_REQUEST,
} from '../constants/auth.constant';
import { getAuthStatusSelector } from '../selectors/auth.selector';

function* handleLogin(obj) {}
function* handleLogout() {}
function* handleSignup(obj) {}
function* handleChangeAccount(obj) {}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = yield select(getAuthStatusSelector);

    const action = yield take(LOGIN_REQUEST);
    yield fork(handleLogin, action.payload);
    if (isLoggedIn) {
      yield take(LOGOUT);
      yield call(handleLogout);
    }
  }
}

export default function* AuthSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(SIGNUP_REQUEST, handleSignup);
  yield takeLatest(UPDATE_USER_REQUEST, handleChangeAccount);
}
