module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),



        sass: {
            build: {
                files: {
                    "dist/css/style.css": "src/css/style.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'dist/css/style.css'
                }
            }
        },

        clean: {
            css: ["dist/css/*.css", "dist/css/*.map", "!dist/css/*.min.css"]
        },

        watch: {
            stylesheets: {
                files: ['src/**/*.css', 'src/**/*.scss'],
                tasks: ['sass', 'cssmin', 'clean']
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: './dist'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'cssmin', 'clean', 'connect::keepalive']);


};