import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'AsyncStorage';

import security from "./security.reducer";

/* eslint-disable */
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk];

const rootReducer = combineReducers({
    security,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['security'],
    //whitelist: [],
    blacklist: [],
  };
  

const persistedReducer = persistReducer(persistConfig, rootReducer);




//let store = createStore(rootReducer, composeEnhancers(
 //   applyMiddleware(thunk),
//));

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middlewares));
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {
  store,
  persistor,
};


//let store = createStore(rootReducer);
//export default store;