var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var paths = {
  scripts: 'js/*.js'
};

function handleError (error) {
 //If you want details of the error in the console
    console.log(error.toString());
    this.emit('end');
}

gulp.task("default", function () {
  browserify({
    entries: './js/app.js',
    debug: true
    })
    .transform(babelify)
    .bundle()
    .on('error', handleError)
    .pipe(source('output.js'))
    .pipe(gulp.dest('./dist'));
});
  
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ["default"])
  .on('error', handleError);
});