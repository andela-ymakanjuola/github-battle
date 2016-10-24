var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')
var Raven = require('raven-js');

var sentryKey = '2b8e0ceabaeb4e729cbeaa026d822b30';
var sentryApp = '108742';
var sentryURL = 'https://' + sentryKey + '@sentry.io/' + sentryApp;

var _APP_INFO = {
  name: 'Github Battle',
  branch: 'video4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
  }
}).install();

ReactDOM.render(routes, document.getElementById('app') );
