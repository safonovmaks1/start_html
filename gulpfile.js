'use strict';

global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    sass: require('gulp-sass'),
    notify: require('gulp-notify'),
    autoprefixer: require('gulp-autoprefixer'),
    concatCss: require('gulp-concat-css'),
    cleanCss: require('gulp-clean-css'),
    gcmq: require('gulp-group-css-media-queries'),
    sourcemaps: require('gulp-sourcemaps'),
    uglify: require('gulp-uglify'),
    rename: require('gulp-rename'),
    del: require('del'),
    imagemin: require('gulp-imagemin'),
    cache: require('gulp-cache'),
    concat: require('gulp-concat'),
    gutil: require('gulp-util'),
    vinylFTP: require('vinyl-ftp'),
    JpegRecompress: require('imagemin-jpeg-recompress'),
    pngquant: require('imagemin-pngquant'),
    plumber: require('gulp-plumber'),
    replace: require('gulp-replace'),
    gulpif: require('gulp-if'),
    debug: require('debug'),
    gulpResolveUrl: require('gulp-resolve-url'),
    size: require('gulp-size'),
    gulpStylelint: require('gulp-stylelint'),
    gulpWebpack: require('webpack-stream'),
    webpack: require('webpack'),
    webpackConfig: require('./webpack.config.js'),
    smartgrid: require('smart-grid'),

    path: {
        tasks: require('./gulp/config/tasks.js'),

        src: {
            root: 'src',
            smartgrid: 'src/scss',
            css: 'src/css/style.css',
            js: 'src/js/index.js',
            htaccess: 'src/ht_access',
            mailer: 'src/mailer/**'
        },
        templates: {
            src: 'src/**/*.html',
        },
        styles: {
            scss: 'src/scss/**/*.scss',
            css: 'src/css',
        },
        scripts: {
            js: 'src/js',
        },
        fonts: {
            src: 'src/fonts/**/*',
        },
        img: {
            src: 'src/img/**/*.+(png|jpg|jpeg|gif|svg)'
        },
        build: {
            root: 'dist',
            styles: 'dist/css',
            scripts: 'dist/js',
            fonts: 'dist/fonts',
            img: 'dist/img',
            mailer: 'dist/mailer'
        }
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('smartgrid');

$.gulp.task('clean',
    $.gulp.series(
        'delete',
        'cleanCache'
    ));

$.gulp.task('default',
    $.gulp.parallel(
        'serve',
        'watch',
        'styles:dev',
        'scripts:dev'
    )
);

$.gulp.task('build',
    $.gulp.series('clean',
        $.gulp.parallel(
            'html',
            'fonts',
            'styles:prod',
            'scripts:prod',
            'img',
            'htaccess',
            'mailer'
        )
    ));
