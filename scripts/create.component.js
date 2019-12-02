var fs = require('fs')
var createFolder = require('./create.folder')
var { createComponentFile } = require('./create.file')

const [componentName] = process.argv.slice(2)

function createComponent(name) {
  fs.readFile('./src/component/index.js', (err, data) => {
    const upperFirstLetter = name.replace(
      name.charAt(0),
      name.toUpperCase().slice(0, 1),
    )

    const newData = `${data}export { ${upperFirstLetter}Component } from './${name}/${name}.component'\n`
    const path = './src/component/'

    fs.writeFile(`${path}index.js`, newData, 'utf-8', () => {
      const cb = () => createComponentFile(name)

      createFolder(path, name, cb)
    })
  })
}

createComponent(componentName)
