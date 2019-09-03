module.exports = () => {
    $.gulp.task('scripts:dev', () => {
        return $.gulp.src($.path.src.js)
            .pipe($.gulpWebpack($.webpackConfig, $.webpack))
            .pipe($.gulp.dest($.path.scripts.js));
    });

    $.gulp.task('scripts:prod', () => {
        return $.gulp.src('src/js/script.js')
            .pipe($.uglify({
                toplevel: true
            })) // Минимизировать весь js (по желанию)
            .pipe($.rename({
                suffix: '.min',
                prefix: ''
            }))
            .pipe($.gulp.dest($.path.build.scripts));
    });
};