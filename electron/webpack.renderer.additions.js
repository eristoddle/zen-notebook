// Not in use, must be added to package.json:
// https://webpack.electron.build/modifying-webpack-configurations
// "electronWebpack": {
//   "renderer": {
//     "webpackConfig": "electron/webpack.renderer.additions.js"
//   }
// },
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
