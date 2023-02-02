const fileURLtoPath = require('url')
const dirname = require('path')

const __filename=fileURLtoPath(import.meta.url)
const __dirname=dirname(__filename)

module.exports= {__dirname}