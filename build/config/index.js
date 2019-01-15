const path = require('path')
const basePath = path.resolve(__dirname, '../', '../')
module.exports = {
    basePath: basePath,
    distPath: path.resolve(basePath, 'dist'),
    docsPath: path.resolve(basePath, 'docs'),
    srcPath: path.join(basePath, 'src'),
    vuePath: path.join(basePath, './src/vue')
}