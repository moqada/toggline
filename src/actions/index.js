/* @flow */
import base64 from 'base64-js';
import fetch from 'isomorphic-fetch';


/**
 * Login
 *
 * @param username - username
 * @param password - password
 */
export function login(username: string, password: string): Function {
  return dispatch => {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    const signature = `${username}:${password}`;
    const promise = fetch('https://jsonp.afeld.me/?url=https://www.toggl.com/api/v8/me', {
      headers: {
        authorization: `Basic ${base64(signature)}`
      }
    });
    dispatch({
      type: 'LOGIN_COMPLETE',
      payload: promise
    });
  };
}
