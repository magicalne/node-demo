var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var path = require('path');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var ngAnnotate = require('gulp-ng-annotate');
var liveReload = require('gulp-livereload');
var compiledPath = './public/compiled';
var watch = require('gulp-watch');
var moment = require('moment');

gulp.task('less', function() {
  return gulp.src(['./public/stylesheets/less/**/*.less'])
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./public/stylesheets/css'));
});

gulp.task('thirdparty', function() {
  var basePath = './public/components/';
  return gulp.src([
      basePath + 'angularjs/angular.js',
      basePath + 'angularjs-route/angular-route.js',
      basePath + 'jquery/dist/jquery.js',
      basePath + 'bootstrap/dist/js/bootstrap.js'
    ])
    .pipe(concat('thirdparty.js'))
    .pipe(gulp.dest(compiledPath));
});

gulp.task('uglify-js', function() {
  gulp.src(['./public/javascripts/**/*.js', './views/**/*.js'])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .on('error', notify.onError("Error: <%= error.message %>"))
    //    .pipe(uglify())
    .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(gulp.dest(compiledPath))
    .pipe(notify('Uglified JavaScript (' + moment().format('MMM Do h:mm:ss A') + ')'))
    .pipe(liveReload({
      auto: false
    }));
});

gulp.task('watch', function() {
  liveReload.listen();
  watch({
    glob: ['./views/**/*.js', './public/javascripts/**/*.js']
  }, function() {
    gulp.start('uglify-js');
  });

  watch({
    glob: './public/stylesheets/**./*.less'
  }, function() {
    gulp.start('less');
  });

  watch({
    glob: './views/**/*.html'
  }).pipe(liveReload({
    auto: false
  }));
});


gulp.task('default', ['watch']);
