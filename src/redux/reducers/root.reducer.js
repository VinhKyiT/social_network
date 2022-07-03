import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import loading from '../loading/reducer';
import { authReducer } from './auth.reducer';

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  loading,
});

export default rootReducer;
