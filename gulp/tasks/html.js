module.exports = () => {
  $.gulp.task('html', () => {
    return $.gulp.src($.path.templates.src)
      .pipe($.gulp.dest($.path.build.root));
  });
};