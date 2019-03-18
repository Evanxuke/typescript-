import * as React from 'react';
import './webcomponent.js';
import './index.less';


export default class Demo4 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {/*<my-container4 text="Custom element example text">
            </my-container4>*/}
            <h1><code>:defined</code> demo</h1>
            <p>Standard paragraph example text</p>
            <h1>Host selectors <a href="#"><my-container4>example</my-container4></a></h1>
        </div>
    }
}