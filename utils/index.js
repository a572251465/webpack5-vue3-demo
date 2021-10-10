const path = require('path')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  resolvePath
}
