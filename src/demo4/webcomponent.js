import 'document-register-element';
import * as html from './template.html';

class MyContainer extends HTMLElement {
    //配合 attributeChangedCallback
    static get observedAttributes() {
        return ['c', 'l'];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        const style = document.createElement('style');
        shadow.appendChild(style);
        shadow.appendChild(div);

        //创建一个template
        const _div = document.createElement('div');
        //将html内容绑定到模板中
        _div.innerHTML = html;
        shadow.appendChild(_div);
        this.methon(shadow);
    }

    //当自定义元素第一次被连接到文档DOM时被调用。
    connectedCallback() {
        console.log('加载DOM');
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //当自定义元素与文档DOM断开连接时被调用。
    disconnectedCallback() {
        console.log('离开DOM');
    }

    //当自定义元素被移动到新文档时被调用。
    adoptedCallback() {
        console.log('自定义元素发生了移动');
    }

    //当自定义元素的一个属性被增加、移除或更改时被调用。
    attributeChangedCallback() {
        console.log('自定义属性发生了改变');
        this.updateStyle(this);
    }

    updateStyle(elem) {
        const shadow = elem.shadowRoot;
        const childNodes = Array.from(shadow.childNodes);

        childNodes.forEach(childNode => {
            if (childNode.nodeName === 'STYLE') {
                childNode.textContent = `div {
          width: ${elem.getAttribute('l')}px;
          height: ${elem.getAttribute('l')}px;
          background-color: ${elem.getAttribute('c')};}`;
            }
        });
    }

    methon(shadow) {
        const add = shadow.getElementById('add');
        const update = shadow.querySelector('.update');
        const remove = shadow.querySelector('.remove');
        let square;

        update.disabled = true;
        remove.disabled = true;

        add.onclick = () => {
            // Create a custom square element
            square = document.createElement('custom-square');
            square.setAttribute('l', '100');
            square.setAttribute('c', 'red');
            shadow.appendChild(square);

            update.disabled = false;
            remove.disabled = false;
            add.disabled = true;
        };

        update.onclick = () => {
            // Randomly update square's attributes
            square.setAttribute('l', this.random(50, 200));
            square.setAttribute('c', `rgb(${this.random(0, 255)}, ${this.random(0, 255)}, ${this.random(0, 255)})`);
        };

        remove.onclick = () => {
            // Remove the square
            shadow.removeChild(square);

            update.disabled = true;
            remove.disabled = true;
            add.disabled = false;
        };
    }
}

customElements.define('my-container3', MyContainer);

