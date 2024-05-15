"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes_main = _interopRequireDefault(require("./routes_main.js"));
var _routes_user = _interopRequireDefault(require("./routes_user.js"));
var ruta = (0, _express.Router)();
ruta.use("/", _routes_main["default"]);
ruta.use("/api", _routes_user["default"]);
var _default = exports["default"] = ruta;