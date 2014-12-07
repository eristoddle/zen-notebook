var path = require('canonical-path');
var packagePath = __dirname;

module.exports = function (config) {
    console.log('here');

    config = basePackage(config);

    config.set('source.files', [
        { pattern: 'src/app/**/*.js', basePath: path.resolve(packagePath) }
        //{ pattern: '**/*.ngdoc', basePath: path.resolve(packagePath, 'content') }
    ]);

    var currentVersion = { full: '1.2.10', major: '1', minor: '2', dot: '10', codeName: 'BruceBogTrotter', cdn: '1.2.10' };

    config.set('source.currentVersion', currentVersion);

    config.set('rendering.outputFolder', 'build');

    config.set('logging.level', 'debug');

    return config;
};