module.exports = () => {
    $.gulp.task('deploy', () => {
        let conn = $.vinylFTP.create({
                host:       'username@yousite.com',
                user:       'user',
                password:   'pasword',
                parallel:  10,
                log: $.gutil.log
            });
        let globs = [ 'dist/**'];
          // using base = '.' will transfer everything to /public_html correctly
          // turn off buffering in gulp.src for best performance
            return $.gulp.src( globs, {
                base: './dist/', 
                buffer: false
            })
            .pipe( conn.newer( 'yousite/public_html/' )) // only upload newer files
            .pipe( conn.dest( 'yousite/public_html/' ));
    });
};