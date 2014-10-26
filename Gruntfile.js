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
        concat_css: {
//            all: {
//                src: [
//                    "app/css/app.css",
//                    "app/css/notebook.css",
//                    "app/css/namowrimo.css"
//                ],
//                dest: "app/dist.css"
//            }
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
        qunit: {
        },
        jshint: {
        },
        watch: {
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-jshint');
    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-concat-css');

    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['concat', 'uglify',]);

};