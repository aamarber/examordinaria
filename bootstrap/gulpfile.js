const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));

gulp.task('default', (cb) =>{
    gulp.src('./**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist'));

    return cb();
});