import garry2 from './src/garry2.js'
import Body from './src/elements/Body.js'
import BaseElement from './src/elements/BaseElement.js'

const html = new garry2()

html.body.addClass('hey!')
html.body.setId('mainBody')

var p = new BaseElement('p')

p.innerHTML = 'hi!'

html.body.childElements.push(p)

console.log(html.body.render())