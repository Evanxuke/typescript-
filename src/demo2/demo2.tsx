import * as React from 'react';
import './webcomponent.js';


export default class Demo2 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <my-container1></my-container1>
        </div>
    }
}