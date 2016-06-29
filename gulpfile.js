var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var csswring  = require('csswring');
var lost      = require('lost');

gulp.task('styles', function() {
  var processors = [csswring, lost];

  return gulp.src('styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function() {
  gulp.watch('**/*.css', ['styles']);
});
