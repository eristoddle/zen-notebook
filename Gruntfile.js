var Dgeni = require('dgeni');

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "concat": {
            "dist": {
                "src": [
                    'src/lib/angular/angular.min.js',
                    "src/lib/angular-sanitize/angular-sanitize.min.js",
                    "src/lib/buzz/dist/buzz.min.js",
                    "src/lib/angular-showdown/compressed/showdown.js",
                    'src/lib/ngDialog/js/ngDialog.min.js',
                    'src/app-old/modules/*.js',
                    'src/app-old/main.js',
                    'src/app-old/filters.js',
                    'src/app-old/factories/*.js',
                    'src/app-old/directives.js',
                    'src/app-old/controllers/*.js',
                    'src/app-old/components/notebook/*.js',
                    'src/app-old/components/nanowrimo/*.js',
                    'src/app-old/components/leanpub/*.js'
                ],
                "dest": 'app-old/dist.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app-old/dist.min.js': ['app-old/dist.js']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            scripts: {
                files: 'src/app-old/**/*.js',
                tasks: ['concat', 'uglify', 'copy'],
                options: {
                    debounceDelay: 250
                }
            },
            src: {
                files: 'src/scss/*.scss',
                tasks: ['compass', 'copy']
            }
        },
        nodewebkit: {
            options: {
                platforms: ['win', 'osx', 'linux32', 'linux64'],
                //TODO: Stuck in this version instead of latest because of download issue?
                version: '0.11.2',
                buildDir: './build',
                macIcns: 'app-old/icon.icns',
                winIco: 'app-old/icon.ico'
            },
            src: ['./app-old/**/*']
        },
        shell: {
            zipandmove: {
                command: 'sh releaseBuilds.sh',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'scripts'
                    }
                }
            },
            quickbuild:{
                command: 'sh buildQuick.sh',
                options: {
                    stderr: false,
                    execOptions: {
                        cwd: 'scripts'
                    }
                }
            }
        },
        push: {
            options: {
                files: ['package.json', './app-old/package.json'],
                updateConfigs: [],
                releaseBranch: ['master'],
                add: true,
                addFiles: ['.'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['-a'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin master',
                npm: false,
                npmTag: 'Release v%VERSION%',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: 'app-old/dist.min.js',
                        dest: 'server/public/js/dist.min.js'
                    },
                    {
                        src: 'app-old/app.css',
                        dest: 'server/public/css/app.css'
                    },
                    {
                        src: 'assets/*',
                        dest: 'server/public/assets/'
                    },
                    {
                        src: 'app-old/fonts/*',
                        dest: 'server/public/fonts/'
                    },
                    {
                        src: 'app-old/components/*',
                        dest: 'server/public/components/'
                    },
                    {
                        src: 'app/footer/*',
                        dest: 'server/public/footer/'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-node-webkit-builder');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-push-release');

    grunt.registerTask('dgeni', 'Generate docs via dgeni.', function () {
        var dgeni = require('dgeni');
        var done = this.async();
        console.log('here');

        dgeni(require('./docs/dgeni-zen-notebook.js'))
            .generateDocs()
            .then(done);
    });
//    grunt.registerTask('dgeni', 'Generate docs via dgeni-zen-notebook.js.', function () {
//        var done = this.async();
//        console.log('here');
//        var dgeni = new Dgeni([require('./docs/dgeni-zen-notebook.js')]);
//        console.log('here4');
//        dgeni.generate().then(done);
//    });

    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'copy']);
    grunt.registerTask('build', ['concat', 'uglify', 'compass', 'copy', 'nodewebkit']);
    grunt.registerTask('release', ['concat', 'uglify', 'compass', 'copy', 'nodewebkit', 'shell:zipandmove', 'push']);
    grunt.registerTask('quickbuild', ['shell:quickbuild']);

};
