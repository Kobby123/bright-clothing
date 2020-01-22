import {createStore, applyMiddleware} from "redux";
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';

import root_reducer from "./root_reducer";

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(root_reducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
