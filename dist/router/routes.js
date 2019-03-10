"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var demo1_1 = require("../demo1/demo1");
var router = (react_1.default.createElement(react_router_dom_1.HashRouter, null,
    react_1.default.createElement(react_router_dom_1.Route, { component: demo1_1.default, path: "/demo1" })));
exports.default = router;
