import 'document-register-element';
import * as html from './template.html';

class MyContainer extends HTMLElement {
    constructor() {
        super();
        //创建一个template
        const template = document.createElement('template');
        //将html内容绑定到模板中
        template.innerHTML = html;
        let templateContent = template.content;
        this.attachShadow({mode: 'closed'}).appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('my-container1', MyContainer);

