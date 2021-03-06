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
var MyContainer = /** @class */ (function (_super) {
    __extends(MyContainer, _super);
    function MyContainer() {
        var _this = _super.call(this) || this;
        var wrapper = document.createElement('span');
        wrapper.innerHTML = 'hello world!';
        var shadom = _this.attachShadow({ mode: 'open' }); //closed切换变为只读
        shadom.appendChild(wrapper);
        return _this;
    }
    return MyContainer;
}(HTMLElement));
exports.MyContainer = MyContainer;
