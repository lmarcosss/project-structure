var fs = require('fs')

function createFolder(path, name, cb) {
  const address = `${path}${name}`
  fs.mkdir(address, null, cb)
}

module.exports = createFolder
