"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./webcomponent.js");
var Demo3 = /** @class */ (function (_super) {
    __extends(Demo3, _super);
    function Demo3(props) {
        return _super.call(this, props) || this;
    }
    Demo3.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("my-container2", null,
                React.createElement("span", { slot: "my-text" }, "Let's have some different text!"),
                React.createElement("ul", { slot: "my-ul" },
                    React.createElement("li", null, "Let's have some different text!"),
                    React.createElement("li", null, "In a list!"))));
    };
    return Demo3;
}(React.Component));
exports.default = Demo3;
