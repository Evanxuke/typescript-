import * as React from 'react';
import {MyContainer} from './webcomponent';


export default class Demo1 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        customElements.define('my-container', MyContainer);
    }


    render() {
        return <div>
            <my-container></my-container>
        </div>
    }
}