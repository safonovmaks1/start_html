module.exports = () => {
    $.gulp.task('img', () => {
        return $.gulp.src($.path.img.src)
            .pipe($.plumber())
            .pipe($.cache($.imagemin([
                $.imagemin.gifsicle({
                    interlaced: true
                }),
                $.imagemin.jpegtran({
                    progressive: true
                }),
                $.JpegRecompress({
                    loops: 5,
                    min: 70,
                    max: 75,
                    quality: 'medium'
                }),
                $.imagemin.svgo(),
                $.imagemin.optipng({
                    optimizationLevel: 3
                }),
                // $.pngquant({ quality: '65-70', speed: 5 })
            ], {
                    verbose: true
                })))
            .pipe($.gulp.dest($.path.build.img));
    });
};