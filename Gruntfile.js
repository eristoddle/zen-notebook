module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "concat": {
            "dist": {
                // the files to concatenate
                "src": [
                    'app/js/lib/angular.min.js',
                    "app/js/lib/angular-sanitize.min.js",
                    "app/js/lib/nw-fileDialog.js",
                    "app/js/lib/buzz.min.js",
                    'app/js/app/main.js',
                    'app/js/app/directives.js',
                    'app/js/app/controllers.js',
                    'app/js/app/services.js',
                    'app/js/app/components/notebook/directives.js',
                    'app/js/app/components/notebook/controllers.js',
                    'app/js/app/components/notebook/services.js',
                    'app/js/app/components/nanowrimo/directives.js',
                    'app/js/app/components/nanowrimo/controllers.js',
                    'app/js/app/components/nanowrimo/services.js'
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
            src: {
                files: ['app/js/app/**/*.js', 'scss/*.scss'],
                tasks: ['default']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};