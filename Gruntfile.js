module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "concat": {
            "dist": {
                // the files to concatenate
                "src": [
                    'src/lib/angular.min.js',
                    "src/lib/angular-sanitize.min.js",
                    "src/lib/buzz.min.js",
                    'src/app/modules/*.js',
                    'src/app/main.js',
                    'src/app/services.js',
                    'src/app/directives.js',
                    'src/app/controllers.js',
                    'src/app/components/notebook/*.js',
                    'src/app/components/nanowrimo/*.js'
                ],
                // the location of the resulting JS file
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
                tasks: ['concat', 'uglify'],
                options: {
                    debounceDelay: 250
                }
            },
            src: {
                files: 'scss/*.scss',
                tasks: ['compass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};