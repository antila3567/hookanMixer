import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import authReducer from './authReducer';
import mixesReducer from './mixesReducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'mixes'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  mixes: mixesReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
