module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            build: ['dist']
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/bgg-home.css': 'src/bgg-home.scss',
                    'dist/layout.css': 'src/layout.scss'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    data: require('./input-data.json')
                },
                files: {
                    'dist/bgg-home.html': ['src/bgg-home.jade'],
                    'dist/layout-example.html': ['src/layout-example.jade']
                }
            }
        },
        watch: {
            markup: {
                files: ['src/**/*.jade', 'input-data.json'],
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
                    base: ['dist', '.']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', ['clean', 'sass', 'jade'])
    grunt.registerTask('serve', ['build', 'connect', 'watch'])
    grunt.registerTask('default', ['build']);

};