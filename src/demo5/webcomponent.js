import 'document-register-element';

class MyContainer extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        let shadowRoot = this.attachShadow({mode: 'open'});
        /*const divElem = document.createElement('div');
        divElem.textContent = this.getAttribute('text');
        shadowRoot.appendChild(divElem);*/

        let style = document.createElement('style');
        let span = document.createElement('span');
        span.textContent = this.textContent;
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(span);
        style.textContent = 'span:hover { text-decoration: underline; }' +
            ':host-context(h1) { font-style: italic; }' +
            ':host-context(h1):after { content: " - no links in headers!" }' +
            ':host-context(article, aside) { color: gray; }' +
            ':host(.footer) { color : red; }' +
            ':host { background: rgba(0,0,0,0.1); padding: 2px 5px; }';
        shadowRoot.appendChild(style);
    }
}

customElements.define('my-container4', MyContainer);

