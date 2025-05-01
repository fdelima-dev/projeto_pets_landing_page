const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const imageMin = require('gulp-imagemin')

gulp.task('imageMin', function(){
    return gulp.src('./src/images/**/**/*')
    .pipe(imageMin())
    .pipe(gulp.dest('./dist/images'))
})


gulp.task('styles', function(){
    return gulp.src('./src/styles/**/**/*.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/css'))
})


gulp.task('watchFiles', function(){
    gulp.watch('./src/styles/**/**/*.scss', gulp.series('styles'))
})
gulp.task('default', gulp.series('imageMin', 'styles', 'watchFiles'))