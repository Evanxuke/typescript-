import * as React from 'react';
import {BasicTypeProps, BasicTypeStates} from './index';
import {PopUpInfo} from './webcomponent';


enum Color {Red, Yellow, Green = 4, Blue}

export default class Demo1 extends React.Component<BasicTypeProps, BasicTypeStates> {
    constructor(props) {
        super(props);
        this.state = {
            hexadecimal: 0xf00d,//十六进制
            binary: 0b1010,//二进制
            octal: 0o744//八进制
        }
    }

    componentDidMount() {
        customElements.define('x-search', PopUpInfo);
    }


    render() {
        return <div>
            <x-search></x-search>
        </div>
    }
}