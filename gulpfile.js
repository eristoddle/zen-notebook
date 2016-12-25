var gulp = require('gulp'),
    electron = require('gulp-electron'),
    gulpWatch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    argv = process.argv,
    packageJson = require('./src/package.json');

/**
 * Ionic hooks
 * Add ':before' or ':after' to any Ionic project command name to run the specified
 * tasks before or after the command.
 */
gulp.task('serve:before', ['watch']);
gulp.task('emulate:before', ['build']);
gulp.task('deploy:before', ['build']);
gulp.task('build:before', ['build']);

// we want to 'watch' when livereloading
var shouldWatch = argv.indexOf('-l') > -1 || argv.indexOf('--livereload') > -1;
gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var buildSass = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');

var isRelease = argv.indexOf('--release') > -1;

gulp.task('watch', ['clean'], function(done) {
    runSequence(
        ['sass', 'html', 'fonts', 'scripts'],
        function() {
            gulpWatch('app/**/*.scss', function() {
                gulp.start('sass');
            });
            gulpWatch('app/**/*.html', function() {
                gulp.start('html');
            });
            buildBrowserify({
                watch: true
            }).on('end', done);
        }
    );
});

gulp.task('build', ['clean'], function(done) {
    runSequence(
        ['sass', 'html', 'fonts', 'scripts'],
        function() {
            buildBrowserify({
                minify: isRelease,
                browserifyOptions: {
                    debug: !isRelease
                },
                uglifyOptions: {
                    mangle: false
                }
            }).on('end', done);
        }
    );
});

gulp.task('sass', buildSass);
gulp.task('html', copyHTML);
gulp.task('fonts', copyFonts);
gulp.task('scripts', copyScripts);
gulp.task('clean', function() {
    return del('www/build');
});

/**
 * Not is use yet
 *
 * May have to do this
 * https://forum.ionicframework.com/t/best-practice-to-include-external-javascript-libraries/50568/7
 * https://www.thepolyglotdeveloper.com/2016/01/include-external-javascript-libraries-in-an-angular-2-typescript-project/
 *
 * gulp.task('scripts', function () {
    return copyScripts({
        src: [
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'node_modules/angular2/bundles/angular2-polyfills.min.js'
        ]
    });
});
 *
 */

gulp.task('electron', function() {

    gulp.src("")
        .pipe(electron({
            src: './src',
            packageJson: packageJson,
            release: './release',
            cache: './cache',
            version: 'v0.37.4',
            packaging: true,
            token: 'abc123...',
            platforms: ['win32-ia32', 'darwin-x64'],
            platformResources: {
                darwin: {
                    CFBundleDisplayName: packageJson.name,
                    CFBundleIdentifier: packageJson.name,
                    CFBundleName: packageJson.name,
                    CFBundleVersion: packageJson.version,
                    icon: 'gulp-electron.icns'
                },
                win: {
                    "version-string": packageJson.version,
                    "file-version": packageJson.version,
                    "product-version": packageJson.version,
                    "icon": 'gulp-electron.ico'
                }
            }
        }))
        .pipe(gulp.dest(""));
});
