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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var Demo1 = /** @class */ (function (_super) {
    __extends(Demo1, _super);
    function Demo1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hexadecimal: 0xf00d,
            binary: 10,
            octal: 484 //八进制
        };
        return _this;
    }
    Demo1.prototype.render = function () {
        var c = Color.Yellow;
        console.log(c);
        var _a = this.state, hexadecimal = _a.hexadecimal, binary = _a.binary, octal = _a.octal;
        return React.createElement("div", null,
            "16\u8FDB\u5236:",
            hexadecimal,
            ",8\u8FDB\u5236:",
            octal,
            ",2\u8FDB\u5236:",
            hexadecimal);
    };
    return Demo1;
}(React.Component));
exports.default = Demo1;
