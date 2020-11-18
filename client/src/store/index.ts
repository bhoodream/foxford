import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';
import middlewares from './middlewares';

import { INITIAL_STATE } from './Const';

const store = createStore(
    reducer,
    INITIAL_STATE,
    applyMiddleware(...middlewares)
);

export default store;
