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
      someName: {
        // webpack options
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
    }

  });

  grunt.registerTask('default', ['babel','webpack']);
  grunt.registerTask('web', ['webpack']);

};
