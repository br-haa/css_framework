const { series, parallel } = require('gulp')
const clean = require('./gulp/clean')
const watch = require('./gulp/watch')
const { default: sass } = require('./gulp/scss')


exports.sass = sass
exports.clean = clean

exports.default = series(
    clean,
    parallel(sass),
    parallel(watch)
)

exports.build = series(
    clean,
    parallel(sass),
)

