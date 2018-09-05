'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
let tasks = ['sass-nested', 'sass-expanded', 'sass-compact','sass-compressed'];
gulp.task('sass-nested', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle:'nested'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css-nested'));
});
gulp.task('sass-expanded', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css-expanded'));
});
gulp.task('sass-compact', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css-compact'));
});
gulp.task('sass-compressed', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css-compressed'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', tasks);
});

gulp.task('default',['sass:watch'],function(){

});