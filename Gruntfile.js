var webpack = require("webpack");

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        babel: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'server/',
                    src: ['**/*.js'],
                    dest: 'dist/server/'
                }]
            }
        },
        webpack: {
            dist: {
                entry: "./web/app/entry.js",
                output: {
                    path: "dist/web/",
                    filename: "app.js",
                },
                stats: {
                    // Configure the console output
                    colors: true,
                    modules: true,
                    reasons: true
                },
                module: {
                    loaders: [{
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel'
                    }]
                },
                resolve: {
                    extensions: ['', '.js', '.jsx']
                },
                /*plugins: [new webpack.optimize.UglifyJsPlugin({
                    compress: {
                        warnings: false
                    }
                })]*/
            }
        },

        postcss: {
            options: {
                map: true,

                processors: [
                    require("postcss-import")(),
                    require('postcss-center'),
                    require("postcss-cssnext")(),
                    //require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'web/style/index.css',
                dest: 'dist/style/main.css'
            }
        },

        watch: {
            options: {
                spawn: true,
            },
            css: {
                files: ['web/style/**/*.css'],
                tasks: ['postcss']
            },
            js: {
                files: ['web/app/**/*.js', 'web/app/**/*.jsx'],
                tasks: ['webpack']
            }
        },

    });

    grunt.registerTask('server', ['babel']);
    grunt.registerTask('default', ['babel', 'webpack', 'postcss']);
    grunt.registerTask('web', ['webpack', 'postcss']);

};
