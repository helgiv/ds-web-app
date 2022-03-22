const rewire = require('rewire');
const webpack = require('webpack');
const defaults = rewire('react-scripts/scripts/start.js');
const webpackConfig = require('react-scripts/config/webpack.config');

//In order to override the webpack configuration without ejecting the create-react-app
defaults.__set__('configFactory', (webpackEnv) => {
  let config = webpackConfig(webpackEnv);

  //Customize the webpack configuration here.
/*   config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve('process/browser'),
    zlib: require.resolve('browserify-zlib'),
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util'),
    buffer: require.resolve('buffer'),
    asset: require.resolve('assert'),
  }; */

  config.resolve.fallback =  {
    ...config.resolve.fallback,
    //"child_process": false, 
    //"process":  false, 
    process: require.resolve('process/browser'),
    "fs": false, 
    util: require.resolve('util'),
    //"util": false, 
    //"http": require.resolve("stream-http"),
    "http": false,
    //"https": false,
    //"tls": false,
    //"net": false,
    "crypto": false, 
    //"path": false,
    //"os": false, 
    stream: require.resolve('stream-browserify'),
    //"stream": false,
    buffer: require.resolve('buffer'),
    assert: require.resolve('assert'),
    "zlib": false
    }

  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ];

  return config;
});