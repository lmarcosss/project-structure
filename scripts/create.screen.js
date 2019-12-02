var fs = require('fs')
var createFolder = require('./create.folder')
var { createScreenFile } = require('./create.file')

const [screenName] = process.argv.slice(2)

function createScreen(name) {
  fs.readFile('./src/component/index.js', function(err, data) {
    const upperFirstLetter = name.replace(
      name.charAt(0),
      name.toUpperCase().slice(0, 1),
    )
    const newData = `${data}export { ${upperFirstLetter}Screen } from './${name}/${name}.screen'\n`
    const path = './src/screen/'

    fs.writeFile(`${path}index.js`, newData, 'utf-8', () => {
      const cb = () => createScreenFile(name)

      createFolder(path, name, cb)
    })
  })
}

createScreen(screenName)
