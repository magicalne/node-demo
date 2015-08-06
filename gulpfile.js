var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var path = require('path');
var concat = require('gulp-concat');

var compiledPath = './public/compiled';

gulp.task('less', function() {
  return gulp.src('./public/stylesheets/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('thirdparty', function() {
  var basePath = './public/components/';
  return gulp.src([basePath + 'jquery/jquery.js',
      basePath + 'angularjs/angular.js',
      basePath + 'bootstrap/'
    ])
    .pipe(uglify())
    .pipe(gulp.dest(compiledPath));
});

gulp.task('default', function() {

});