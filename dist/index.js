"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app.js"));
var _colors = _interopRequireDefault(require("colors"));
var _msj = require("./message/msj.js");
_app["default"].listen(_app["default"].get("port"), function () {
  console.log(_colors["default"].bgCyan("".concat(_msj.msjconsole + _app["default"].get("port"))));
});