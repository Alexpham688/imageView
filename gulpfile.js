var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imageMin');


//sass
gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css/'));
});
//imagemin
gulp.task('imageMin', () =>
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./image/'))
);

gulp.task('default', ['imageMin','sass']);

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
});
