import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const makeStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default makeStore;
