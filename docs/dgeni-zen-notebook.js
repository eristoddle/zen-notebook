//var _ = require('lodash');
//var Package = require('dgeni').Package;
var path = require('canonical-path');
var packagePath = __dirname;

console.log('here2');

module.exports = function (config) {
    console.log('here3');

    config.set('source.files', [
        { pattern: 'src/app/**/*.js', basePath: path.resolve(packagePath) }
        //{ pattern: '**/*.ngdoc', basePath: path.resolve(packagePath, 'content') }
    ]);

    var currentVersion = { full: '0.0.7', major: '0', minor: '0', dot: '7', codeName: 'Alpha'};

    config.set('source.currentVersion', currentVersion);

    config.set('rendering.outputFolder', 'build');

    config.set('logging.level', 'debug');

    return config;
};