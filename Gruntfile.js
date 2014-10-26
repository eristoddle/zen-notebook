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
                    'app/js/app/components/notebook/*.js',
                    'app/js/app/components/nanowrimo/*.js'
                ],
                // the location of the resulting JS file
                "dest": 'app/js/dist.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'app/dist.min.js': ['app/js/dist.js']
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