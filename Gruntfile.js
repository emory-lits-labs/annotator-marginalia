module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      default: {
        files: {
            'build/<%= pkg.version %>/annotator.marginalia.min.js': [
                'src/scripts/bootstrap.dropdown.js',
                'src/scripts/moment.min.js',
                'src/scripts/annotator.marginalia.js'
             ]
        }
      }
    },

    cssmin: {
      target: {
        files: {
            'build/<%= pkg.version %>/annotator.marginalia.min.css': [
                'src/styles/annotator.marginalia.css'
             ]
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};