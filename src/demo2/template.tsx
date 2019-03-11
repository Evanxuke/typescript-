import * as React from 'react';
import './template.css';


export default class Template1 extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return <span className="text">hello world!</span>
    }
}