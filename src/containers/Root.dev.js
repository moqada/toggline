/* @flow */
import React from 'react';
import {Provider} from 'react-redux';

import App from './App';
import DevTools from './DevTools';
import configureStore from '../stores/configureStore';

const store = configureStore();

/**
 * Root Container for Development
 *
 * @return {ReactElement}
 */
export default function Root(): React.Element {
  return (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  );
}
