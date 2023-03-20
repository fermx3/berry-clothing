// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root.reducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// //Hide logger on production mode
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);
// //Activate Redux Devtools
// const composedEnhancer =
//   (process.env.NODE_ENV !== 'production' &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

export const persistor = persistStore(store);
