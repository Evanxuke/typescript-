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
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2(props) {
        return _super.call(this, props) || this;
    }
    Demo2.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("my-container2", null,
                React.createElement("span", { slot: "my-text" })));
    };
    return Demo2;
}(React.Component));
exports.default = Demo2;
