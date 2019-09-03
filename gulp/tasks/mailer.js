module.exports = () => {
    $.gulp.task('mailer', () => {
        return $.gulp.src($.path.src.mailer)
            .pipe($.gulp.dest($.path.build.mailer));
    });
};