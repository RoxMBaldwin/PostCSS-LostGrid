var gulp = require('gulp');
var postcss = require('gulp-postcss')
var autoprefixer = require('autoprefixer')

gulp.task('styles', function() {
  var processors = [
    autoprefixer({browsers: ['last 2 version']})
  ]
  return gulp.src('styles.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
