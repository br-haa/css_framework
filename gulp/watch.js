const { input } = require('./_config')
const { watch, series } = require('gulp')

const { src: sassSrc, default: sass } = require('./scss')

const watcher = cb => {
    console.log('my sassSrc= ' + sassSrc)
    watch(sassSrc)

}

module.exports = watcher