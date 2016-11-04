module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    watch: {
      sass: {
        files: 'src/**/*.scss',
        tasks: ['sass']
      }
    },
    requirejs: {
      build: {
        options: {
          baseUrl: ".",
          mainConfigFile: "src/scripts/main.js",
          include: [
            'src/scripts/app.js'
          ],
          out: ".build/js/app.js"
        }
      }
    },
    clean: {
      build: {
        src: ['./.build']
      }
    },
    sass: {
  		options: {
  			outputStlye: 'compressed'
  		},
  		dev: {
  			files: {
  				'.build/css/styles.css': 'src/sass/main.scss'
  			}
  		}
  	},
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            '.build/css/*.css',
            '.build/js/*.js',
            'src/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: '.',
          serveStatic: ['src', 'bower_components', '.build']
        }
      }
    }
  });

  grunt.registerTask('dev', ['clean', 'sass', 'browserSync', 'watch']);
  grunt.registerTask('build', ['clean', 'sass', 'concat']);
}
