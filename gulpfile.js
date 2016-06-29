var gulp       = require('gulp');
var postcss    = require('gulp-postcss');
var csswring   = require('csswring');
var lost       = require('lost');
var stylus     = require('gulp-stylus')
var processors = [csswring, lost];

gulp.task('styles', function() {
  return gulp.src('styles.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
});

gulp.task('fancystyles', function() {
  return gulp.src('fancystyle.styl')
    .pipe(stylus())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'));
})

gulp.task('watch:styles', function() {
  gulp.watch('**/*.css', ['styles']);
});
