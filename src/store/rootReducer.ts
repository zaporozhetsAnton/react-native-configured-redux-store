import {combineReducers} from 'redux';
import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {persistReducer} from 'redux-persist';
// @ts-ignore
// import createSensitiveStorage from 'redux-persist-sensitive-storage';
import AsyncStorage from '@react-native-community/async-storage';

import {reducers as example} from './example';

// const sensitiveStorage = createSensitiveStorage({
//   keychainService: 'myKeychain',
//   sharedPreferencesName: 'mySharedPrefs',
// });

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['example'],
};

// const sensitivePersistConfig = {
//   key: 'token',
//   storage: sensitiveStorage,
// };

const rootReducer = combineReducers({
  example,
  // sensitive: persistReducer(tokenPersistConfig, sensitiveReducer)
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default persistedReducer;
