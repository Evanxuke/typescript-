//import 'document-register-element';

class MyContainer extends HTMLElement {
    constructor() {
        super();
        let wrapper = document.createElement('span');
        wrapper.innerHTML = 'hello world!';
        const shadom = this.attachShadow({mode: 'open'});//closed切换变为只读
        shadom.appendChild(wrapper);
    }
}

customElements.define('my-container', MyContainer);