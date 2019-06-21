"use strict";


// Load requirements
const gulp = require('gulp');
const del = require('del');

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const sass = require('gulp-sass');
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");




// Clean production assets
function clean() {
    return del(['./build/']);
}

function test() {
    console.log('getting started');
}


// SASS Processing
var plugins = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano()
];

// Process Core CSS and place the minified version in the build directory
function css() {
    return gulp
        .src('./src/**/*.scss')
        .pipe(plumber())
        .pipe(sass({ outputStyle: 'compressed'})) //nested or
        .pipe(gulp.dest('./build/assets/css/'))

        .pipe(rename({ suffix: ".min" }))
        .pipe(postcss(plugins))
        .pipe(gulp.dest("./build/assets/css/"))
}



// Watch a the .scss files for changes during theme development
// at this time, we do not have a sample project file to view
// in the browser, so you will need to just take my word for it
function watchFiles() {
    gulp.watch("./src/**/*", css);
}


// Complex Tasks
const build = gulp.series(clean, gulp.parallel(css));
const watch = gulp.parallel(watchFiles);

exports.test = test;
exports.css = css;
exports.build = build;
exports.watch = watch;

exports.default = build;




