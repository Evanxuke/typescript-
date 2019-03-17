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
require("document-register-element");
var template_1 = require("./template");
var MyContainer = /** @class */ (function (_super) {
    __extends(MyContainer, _super);
    function MyContainer() {
        return _super.call(this) || this;
    }
    MyContainer.prototype.componentDidMount = function () {
        var t = document.getElementsByTagName('text');
        var cloneDom = document.importNode(t.content, true);
        var shadom = this.attachShadow({ mode: 'open' });
        shadom.appendChild(cloneDom);
    };
    MyContainer.prototype.render = function () {
        return React.createElement(template_1.default, null);
    };
    return MyContainer;
}(HTMLElement));
exports.MyContainer = MyContainer;
