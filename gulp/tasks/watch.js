module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch("src/**/*.html").on('change', $.browserSync.reload);
        $.gulp.watch($.path.styles.scss, $.gulp.parallel('styles:dev'));
        $.gulp.watch("src/js/**/*.js").on('change', $.browserSync.reload);
        $.gulp.watch("src/**/*.php").on('change', $.browserSync.reload);
    });
};