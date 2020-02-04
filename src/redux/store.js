import {createStore, applyMiddleware} from "redux";
import {persistStore} from 'redux-persist'
import logger from 'redux-logger';
//import thunk from "redux-thunk";
import rootSaga from "./root_saga";

import root_reducer from "./root_reducer";

import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];



if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store = createStore(root_reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);


export const persistor = persistStore(store);

