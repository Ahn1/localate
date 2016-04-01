module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: ["syntax-async-functions", "transform-regenerator"]
      },
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
        entry: "./web/app/index.js",
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
      }
    },

    postcss: {
      options: {
        map: true,

        processors: [
          require("postcss-import")(),
          require("postcss-import")(),
          require("postcss-cssnext")(),
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'web/style/index.css',
        dest: 'dist/style/main.css'
      }
    }

  });

  grunt.registerTask('server', ['babel']);
  grunt.registerTask('default', ['babel', 'webpack','postcss']);
  grunt.registerTask('web', ['webpack','postcss']);

};
