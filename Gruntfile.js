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
                    'src/app/modules/*.js',
                    'src/app/main.js',
                    'src/app/filters.js',
                    'src/app/factories.js',
                    'src/app/directives.js',
                    'src/app/controllers.js',
                    'src/app/components/notebook/*.js',
                    'src/app/components/nanowrimo/*.js'
                ],
                "dest": 'app/dist.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app/dist.min.js': ['app/dist.js']
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
                files: 'src/app/**/*.js',
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
                version: 'latest',
                buildDir: './build',
                macIcns: 'app/icon.icns',
                winIco: 'app/icon.ico'
            },
            src: ['./app/**/*']
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
        dgeni: {
            options: {
                basePath: './'
            },
            src: ['./src/*.js'],
            dest: './docs'
        },
        push: {
            options: {
                files: ['package.json', './app/package.json'],
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
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: 'app/dist.min.js',
                        dest: 'server/public/js/dist.min.js'
                    },
                    {
                        src: 'app/app.css',
                        dest: 'server/public/css/app.css'
                    },
                    {
                        src: 'assets/*',
                        dest: 'server/public/assets/'
                    },
                    {
                        src: 'app/fonts/*',
                        dest: 'server/public/fonts/'
                    },
                    {
                        src: 'app/components/*',
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
    grunt.loadNpmTasks('grunt-dgeni');

    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'copy']);
    grunt.registerTask('build', ['concat', 'uglify', 'compass', 'copy', 'nodewebkit']);
    grunt.registerTask('release', ['concat', 'uglify', 'compass', 'copy', 'nodewebkit', 'shell:zipandmove', 'dgeni', 'push']);
    grunt.registerTask('quickbuild', ['shell:quickbuild']);

};