module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),



        sass: {
            build: {
                files: {
                    "dist/stylesheets/style.css": "src/stylesheets/main.scss"
                }
            }
        },

        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/stylesheets/style.min.css': 'dist/stylesheets/style.css'
                }
            }
        },

        clean: {
            css: ["dist/stylesheets/*.css", "dist/stylesheets/*.map", "!dist/stylesheets/*.min.css"]
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

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');    

    grunt.registerTask('default', ['sass', 'cssmin', 'clean', 'connect::keepalive']);


};
