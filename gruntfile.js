module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/bgg-home.css': 'src/bgg-home.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: {
                    'dist/bgg-home.html': ['src/bgg-home.jade']
                }
            }
        },
        watch: {
            markup: {
                files: 'src/**/*.jade',
                tasks: ['jade']
            },
            styles: {
                files: 'src/**/*.scss',
                tasks: ['sass']
            }
        },
        connect: {
            server: {
                options: {
                    port: process.env.C9_PORT || 3000,
                    base: 'dist'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('serve', ['connect', 'watch'])
    grunt.registerTask('default', ['sass', 'jade']);

};