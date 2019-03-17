import * as React from 'react';
import './webcomponent.js';


export default class Demo3 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <my-container2>
                <span slot="my-text">Let's have some different text!</span>
                <ul slot="my-ul">
                    <li>Let's have some different text!</li>
                    <li>In a list!</li>
                </ul>
            </my-container2>
        </div>
    }
}