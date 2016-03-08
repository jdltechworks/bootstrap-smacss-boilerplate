module.exports = function(grunt){
  grunt.initConfig({
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'sass',
          cssDir: 'css',
          environment: 'development'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['jshint', 'compass']);
};