import * as React from 'react';
import './webcomponent.js';


export default class Demo3 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <my-container3>
            </my-container3>
        </div>
    }
}