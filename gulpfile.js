var gulp = require('gulp');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

gulp.task('styles', function() {
  var processesors = [
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src('styles.css')
      .pipe(postcss(processesors))
      .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
