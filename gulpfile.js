var gulp = require('gulp');

gulp.task('styles', function() {
  return gulp.src('styles.css')
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
