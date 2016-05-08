'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack-stream');

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
var BROWSER_SYNC_RELOAD_DELAY = 500;

gulp.task('nodemon',['webpack'],function (cb) {
  var called = false;
  return nodemon({
    // nodemon our expressjs server
    script: './bin/www',
    watch: ['./routes/','./app','./bin/www','./database/','./api'],
    // watch core server file(s) that require server restart on change
  })
    .on('start', function onStart() {
      // ensure start only got called once
      if (!called) { cb(); }
      called = true;
    })
    .on('restart', function onRestart() {
      // reload connected browsers after a slight delay
      setTimeout(function reload() {
        browserSync.reload({
          stream: false
        });
      }, BROWSER_SYNC_RELOAD_DELAY)
    });
});

gulp.task('browser-sync', ['webpack','nodemon'], function (cb) {
  setTimeout(function () { // delay waiting for mongo connection
    browserSync.init({
      proxy: 'http://localhost:3000',
      port: 4000,
    },cb)
  }, BROWSER_SYNC_RELOAD_DELAY)
});

gulp.task('webpack',function () {
  return gulp.src('./public/javascripts/starter.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('./build'))

})
gulp.task('bs-reload-webpack',['webpack'],function () {
  browserSync.reload()
})
gulp.task('bs-reload',function () {
  browserSync.reload()
})
gulp.task('dev', ['browser-sync'], function () {
  gulp.watch('./views/**', ['bs-reload'])
  gulp.watch('./public/javascripts/**', ['webpack','bs-reload-webpack'])
  gulp.watch('./public/stylesheets/**',['bs-reload'])
});
