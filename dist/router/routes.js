"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var demo1_1 = require("../demo1/demo1");
var demo2_1 = require("../demo2/demo2");
var router = (react_1.default.createElement(react_router_dom_1.HashRouter, null,
    react_1.default.createElement(react_router_dom_1.Switch, null,
        react_1.default.createElement(react_router_dom_1.Route, { component: demo1_1.default, path: "/demo1" }),
        react_1.default.createElement(react_router_dom_1.Route, { component: demo2_1.default, path: "/demo2" }))));
exports.default = router;
