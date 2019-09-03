module.exports = () => {
    $.gulp.task('smartgrid', (done) => {
        $.smartgrid($.path.src.smartgrid, {
            filename: "_smartgrid",
            outputStyle: "scss",
            columns: 12,
            offset: "30px",
            mobileFirst: false,
            mixinNames: {
                container: "wrapper"
            },
            container: {
                maxWidth: "1200px",
                fields: "15px"
            },
            breakPoints: {
                xl: {
                    width: "1200px"
                },
                lg: {
                    width: "992px",
                },
                md: {
                    width: "768px"
                },
                sm: {
                    width: "576px"
                },
                xs: {
                    width: "320px"
                }
            }
        });
        done();
    });
};