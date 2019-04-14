const path = require('path')
module.exports = {
  publicPath: './',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/common.scss')
      ]
    }
  }
}
