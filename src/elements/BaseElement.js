export default class BaseElement {
    constructor(name) {
        this.name = name
        this.classes = new Map()
        this.childElements = []
        this.innerHTML = ''
    }

    render() {
        this.innerHTML = this.childElements.reduce((prev, cur) => prev += cur.render(), '')
        return '<' + this.name + '>' + this.innerHTML + '</' + this.name + '>'
    }
}