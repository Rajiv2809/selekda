class Util {
    create() {

    }

    update() {

    }

    draw() {

    }

    change(el, property, value) {
        return el.style[property] = value;
    }

    changeStyle(el, x, y, w, h) {
        this.change(el, 'left', x + 'px');
        this.change(el, 'top', y + 'px');
        this.change(el, 'width', w + 'px');
        this.change(el, 'height', h + 'px');
    }

    createEl({tag = 'div', attrs = {}, classes = [], html = null}) {
        tag = document.createElement(tag);

        Object.entries(attrs).forEach(([name, value]) => tag.setAttribute(name, value));
        classes.forEach((c) => tag.classList.add(c));

        if (html) tag.innerHTML = html;

        return tag;
    }

    collision(first, second) {
        return first.x + first.w - 40 >= second.x && first.x + 25 <= second.x + second.w &&
            first.y + first.h >= second.y && first.y + 20 <= second.y + second.h
    }
}