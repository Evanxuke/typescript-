import * as React from 'react';
import './index.less';

export default class Index extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    onClick=()=>{

    }

    render() {
        return <React.Fragment>
        <span>hello world!</span>
        <input type="button" value="点击跳转" onClick={this.onClick}></button>
        </React.Fragment>
    }
}