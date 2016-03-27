module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets:['es2015'],
        plugins: ["syntax-async-functions","transform-regenerator"]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'server/',
          src: ['**/*.js'],
          dest: 'dist/server/'
        }]
      }
    }
  });

  grunt.registerTask('default', ['babel']);

};
