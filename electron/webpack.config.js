const { withExpoWebpack } = require('@expo/electron-adapter');
const merge = require('webpack-merge');

module.exports = config => {
  const electronConfig = withExpoWebpack(config);
  // electronConfig.preset = 'react-native';
  electronConfig.resolve.alias['react-native$'] = 'react-native-electron';
  return merge(electronConfig, {});
};
