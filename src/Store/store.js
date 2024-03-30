
import {  applyMiddleware} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../Reducers/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(authReducer, composeWithDevTools(applyMiddleware(thunk)))



export default store;
