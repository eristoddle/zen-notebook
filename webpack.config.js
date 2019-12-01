const merge = require('webpack-merge');
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);

    return merge(config, {
        // resolve: {
        //     alias: {
        //         "react-native": "react-native-web"
        //     },
        //     extensions: [".web.js", ".js"]
        // },
        //
        // module: {
        //     rules: [
        //         {
        //             test: /\.(js|jsx)$/,
        //             exclude: /node_modules\/(?!(material-bread|react-native-vector-icons)\/).*/,
        //             use: {
        //                 loader: "babel-loader",
        //                 options: {
        //                     presets: [
        //                         "@babel/preset-env", "@babel/preset-react"
        //                     ],
        //                     plugins: [
        //                         "@babel/plugin-transform-flow-strip-types",
        //                         "@babel/plugin-proposal-class-properties",
        //                         "@babel/plugin-proposal-object-rest-spread",
        //                         "@babel/plugin-transform-runtime",
        //                     ]
        //                 }
        //             }
        //         },
        //         {
        //             test: /.(png|woff|woff2|eot|ttf|svg)$/,
        //             loader: "url-loader?limit=100000"
        //         }
        //     ]
        // }
    });
};
