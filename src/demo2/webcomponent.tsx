import 'document-register-element';
import Template1 from './template';

export class MyContainer extends HTMLElement {
    constructor() {
        super();

    }

    componentDidMount() {
        const t = document.getElementsByTagName('text');
        const cloneDom = document.importNode(t.content, true);
        const shadom = this.attachShadow({mode: 'open'});
        shadom.appendChild(cloneDom);
    }

    render() {
        return <Template1/>;
    }
}