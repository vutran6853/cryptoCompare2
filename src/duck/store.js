import { createStore, applyMiddleware, combineReducers, compose} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import cryptoReducer from './cryptoReducer';

//// Use for Mult Reducers
const combinedReducers  = combineReducers({
    allCryptoList: cryptoReducer
})

////  Redux Dev_tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

const store = createStore(combinedReducers, middlewares);

export default store;