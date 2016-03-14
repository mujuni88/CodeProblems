var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        frameworks: [ 'mocha','chai'],
        files: [
            'tests/tests.webpack.js'
        ],
        browsers: [ 'PhantomJS' ],
        preprocessors: {
            'tests/tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: [ 'dots' ],
        webpack: webpackConfig.test(),
        webpackMiddleware: { noInfo: true }
    });
};
