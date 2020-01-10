import garry2 from './src/garry2.js'
import Body from './src/elements/Body.js'

const html = new garry2()

html.body.addClass('yes')
html.body.childElements.push(new Body())

console.log(html.body.render())