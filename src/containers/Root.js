/* @flow */
/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prd').default;
} else {
  module.exports = require('./Root.dev').default;
}
