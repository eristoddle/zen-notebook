/* eslint-disable @typescript-eslint/no-var-requires */
const { withExpoWebpack } = require('@expo/electron-adapter');

module.exports = (config) => {
  const newConfig = withExpoWebpack(config);
  newConfig.resolve.alias['react-native$'] = 'react-native-electron';
  // Here for an example of how to add a custom webpack config
  // newConfig.module.rules.push({
  //   test: /\.(js|ts|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //   },
  // });
  return newConfig;
};
