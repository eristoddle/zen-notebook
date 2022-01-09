const { withExpoAdapter } = require('@expo/electron-adapter');

module.exports = withExpoAdapter({
  projectRoot: __dirname,
  whiteListedModules: ['@reduxjs/toolkit', 'react-redux'],
});
