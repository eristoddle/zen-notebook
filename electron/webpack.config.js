const { withExpoWebpack } = require('@expo/electron-adapter');
const merge = require('webpack-merge');

module.exports = config => {
  const electronConfig = withExpoWebpack(config);
  return merge(electronConfig, {});
};
