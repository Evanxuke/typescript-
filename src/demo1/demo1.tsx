import * as React from 'react';
import {BasicTypeProps, BasicTypeStates} from './index';


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

    render() {
        let c: Color = Color.Yellow;
        console.log(c);
        const {state: {hexadecimal, binary, octal}} = this;
        return <div>16进制:{hexadecimal},8进制:{octal},2进制:{hexadecimal}</div>
    }
}