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
require("./template.less");
var Template1 = /** @class */ (function (_super) {
    __extends(Template1, _super);
    function Template1(props) {
        return _super.call(this, props) || this;
    }
    Template1.prototype.componentDidMount = function () {
    };
    Template1.prototype.render = function () {
        return React.createElement("span", { className: "text" }, "hello world!");
    };
    return Template1;
}(React.Component));
exports.default = Template1;
