var gulp = require('gulp');
var postcss = require('gulp-postcss')

gulp.task('styles', function() {
  return gulp.src('styles.css')
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
