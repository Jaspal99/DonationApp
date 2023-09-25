import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import User from './reducers/User';
import {logger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
// import persistStore from 'redux-persist/es/persistStore';
const rootReducer = combineReducers({
  user: User,
});
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);
