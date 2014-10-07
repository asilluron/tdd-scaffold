var gulp = require('gulp');

var bower = require('bower');
var mainBowerFiles = require('main-bower-files');

gulp.task('bower', function() {
    bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        })
        .on('end', function() {
            return gulp.src(mainBowerFiles(), {
                    base: './bower_components'
                })
                .pipe(gulp.dest('app/vendor'));
        });
});



gulp.task('default', function() {
    // place code for your default task here
});
