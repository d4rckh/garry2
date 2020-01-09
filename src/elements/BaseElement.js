export default class BaseElement {
    constructor(name) {
        this.name = name
        this.classes = []
        this.childElements = []
        this.innerHTML = ''
        this.props = ''
    }

    render() {
        this.innerHTML = this.childElements.reduce((prev, cur) => prev += cur.render(), '')
        if (this.classes.length > 0) this.props += 'class="' + this.classes.join(' ') + '" '

        return '<' + this.name + ' ' + this.props + '>' + this.innerHTML + '</' + this.name + '>'
    }

    addClass(className) {
        if (this.classes.includes(className)) throw new Error('Class name already exists')
        this.classes.push(className)
    }

    removeClass(className) {
        // TODO
    }
}