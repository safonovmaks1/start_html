module.exports = () => {
    $.gulp.task('styles:dev', () => {
        return $.gulp.src($.path.styles.scss)
            .pipe($.sourcemaps.init())
            .pipe($.sass({
                outputStyle: 'compressed'
            }).on("error", $.notify.onError()))
            .pipe($.gcmq())
            .pipe($.autoprefixer({
                overrideBrowserslist: ["last 2 versions"],
                cascade: false
            }))
            .pipe($.gulpResolveUrl())
            .pipe($.sourcemaps.write('./'))
            .pipe($.size())
            .pipe($.gulp.dest($.path.styles.css))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('styles:prod', () => {
        return $.gulp.src($.path.src.css)
            .pipe($.concatCss('style.css'))
            .pipe($.cleanCss({
                level: 2
            }))
            .pipe($.rename({
                suffix: '.min',
                prefix: ''
            }))
            .pipe($.gulp.dest($.path.build.styles));
    });
};