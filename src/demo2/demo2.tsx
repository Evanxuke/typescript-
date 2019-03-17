import * as React from 'react';

import './webcomponent.js';
import './demo2.less';


export default class Demo2 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <my-container1></my-container1>
            {/*<p>来看看这个受影响吗</p>*/}
        </div>
    }
}