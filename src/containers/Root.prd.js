/* @flow */
import React from 'react';
import {Provider} from 'react-redux';

import App from './App';
import configureStore from '../stores/configureStore';

const store = configureStore();

/**
 * Root Container for Production
 *
 * @return {ReactElement}
 */
export default function Root(): React.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
