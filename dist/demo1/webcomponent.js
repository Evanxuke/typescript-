"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
exports.webComponentsForES5 = Object.create(HTMLElement.prototype, {
    attachedCallback: {
        value: function () {
            var mountPoint = document.createElement('span');
            _this.createShadowRoot().appendChild(mountPoint);
            var name = _this.getAttribute('name');
            var url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(React.createElement("a", { href: url }, name), mountPoint);
        }
    }
});
