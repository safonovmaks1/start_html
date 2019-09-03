module.exports = () => {
    $.gulp.task('serve', () => {
        $.browserSync.init({
            server: {
                baseDir: $.path.src.root
            },
            browser: "google chrome",
            notify: true,
            open: true,
            online: false, // Work Offline Without Internet Connection
            // tunnel: true, 
            // tunnel: "projectname", 
            // Demonstration page: http://projectname.localtunnel.me
        });
    });
};
