import {col, css, row} from "../utils";

export class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHtml() {
        throw new Error('Метод должен toHtml быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const { tag = 'h1', styles } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {  styles, alt, imageStyles } = this.options
        return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}" />`, css(styles))
    }
}
export class ColumnsBlock extends Block {
    constructor(value, options) {
        super( value, options);
    }

    toHtml() {
        const {  styles } = this.options
        const html = this.value.map(item => col(item)).join('')
        return row(html, css(styles))
    }
}
export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}
