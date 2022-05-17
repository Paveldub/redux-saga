import { rootReducer } from '../store/reducers';
import { createStore, compose, applyMiddleware } from 'redux';

// sagas
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../store/sagas';

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleWare),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

sagaMiddleWare.run(rootSaga)