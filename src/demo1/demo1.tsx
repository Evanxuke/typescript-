import * as React from 'react';
import './webcomponent';


export default class Demo1 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <my-container></my-container>
        </div>
    }
}