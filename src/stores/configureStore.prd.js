/* @flow */
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';


const finalCreateStore = applyMiddleware(
  thunkMiddleware,
  promiseMiddleware
)(createStore);


/**
 * Configure Stores
 *
 * @return {Object}
 */
export default function configureStore(): Object {
  return finalCreateStore(rootReducer, {});
}
