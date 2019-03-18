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
require("./index.less");
var Demo4 = /** @class */ (function (_super) {
    __extends(Demo4, _super);
    function Demo4(props) {
        return _super.call(this, props) || this;
    }
    Demo4.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("h1", null,
                React.createElement("code", null, ":defined"),
                " demo"),
            React.createElement("p", null, "Standard paragraph example text"),
            React.createElement("h1", null,
                "Host selectors ",
                React.createElement("a", { href: "#" },
                    React.createElement("my-container4", null, "example"))));
    };
    return Demo4;
}(React.Component));
exports.default = Demo4;
