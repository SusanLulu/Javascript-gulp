let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let minifyCSS = require('gulp-minify-css');
let uglify = require('gulp-uglify');
let del = require('del');
let rename = require('gulp-rename');
let jshint = require('gulp-jshint');
let plumber = require('gulp-plumber');

gulp.task('delete',function(){
  del(['assets/*'], function(err){
    console.log('delete succeed!!!!');
  })
})

gulp.task('style', () => {
   return gulp
       .src('css/style.css')
       .pipe(cleanCSS())
//     .pipe(minifyCSS())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('assets'));
})

gulp.task('script',() =>{
   return gulp
       .src('js/script.js')
       .pipe(plumber())
       .pipe(uglify())
       .pipe(jshint())
       .pipe(rename({suffix: '.min'}))
       .pipe(gulp.dest('assets'));
})

gulp.task('watch',() =>{
  gulp.watch('css/style.css',['style']);
  gulp.watch('js/script.js',['script']);
})

gulp.task('default',['delete','style','script','watch']);
