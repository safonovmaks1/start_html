module.exports = () => {
    $.gulp.task('htaccess', () => {
        return $.gulp.src($.path.src.htaccess)
            .pipe($.rename(".htaccess"))
            .pipe($.gulp.dest($.path.build.root));
    });
};