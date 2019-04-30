const gutil = require('gulp-util')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

function customPlumber (errTitle) {
    return plumber({
        errorHandler: notify.onError({
            // Customizing error title
            title: errTitle || 'Error running Gulp',
            message: 'Error: <%= error.stack %>'
        })
    })
}

module.exports = customPlumber