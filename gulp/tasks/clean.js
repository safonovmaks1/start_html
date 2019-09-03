module.exports = () => {
    $.gulp.task('delete', () => {
        return $.del($.path.build.root);
    });

    $.gulp.task('cleanCache', () => {
        return $.cache.clearAll();
    });
};