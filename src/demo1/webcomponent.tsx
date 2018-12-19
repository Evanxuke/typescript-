import 'document-register-element';

export class MyContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}).innerHTML = `
      <button color="blue" is="my-button">Test</button>`;
        this.shadowRoot.addEventListener('my-button-event', () => {
            const div = document.createElement('div');
            div.innerHTML = `Clicked`;
            this.shadowRoot.appendChild(div);
        });
    }

    renderButton(): JSX.Element {
        return <button color="blue" is="my-button">Test</button>;
    }
}