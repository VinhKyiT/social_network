import { all } from 'redux-saga/effects';
import AuthSaga from './auth.saga';

export default function* rootSaga() {
  console.log('root saga');
  yield all([
    AuthSaga(),
  ]);
}
