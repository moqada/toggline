/* @flow */
import {compose, createStore, applyMiddleware} from 'redux';
import {persistState} from 'redux-devtools';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

import DevTools from '../containers/DevTools';
import rootReducer from '../reducers';


const finalCreateStore = compose(
  applyMiddleware(
    thunkMiddleware,
    promiseMiddleware
  ),
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore);


/**
 * for debug
 *
 * @return {string|null}
 */
function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}


/**
 * Configure Stores
 *
 * @return {Object}
 */
export default function configureStore(): Object {
  // TODO: hot reload
  return finalCreateStore(rootReducer, {});
}
