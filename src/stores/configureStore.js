/* @flow */
/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prd').default;
} else {
  module.exports = require('./configureStore.dev').default;
}
