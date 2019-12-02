var fs = require('fs')
var { style, component, screen } = require('./frames')

const path = './src/'

function createStyleFile(fileName, type) {
  const fileStyleName = `${path}${type}/${fileName}/${fileName}.style.js`

  fs.writeFileSync(fileStyleName, style)
}

function createComponentFile(fileName) {
  const type = 'component'
  const fileComponentName = `${path}${type}/${fileName}.component.js`

  fs.writeFile(fileComponentName, component(fileName), () =>
    createStyleFile(fileName, type),
  )
}

function createScreenFile(fileName) {
  const type = 'screen'
  const fileScreenName = `${path}${type}/${fileName}/${fileName}.screen.js`

  fs.writeFile(fileScreenName, screen(fileName), () =>
    createStyleFile(fileName, type),
  )
}

module.exports = {
  createComponentFile,
  createScreenFile,
}
