"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _msj = require("../message/msj.js");
var _express = require("express");
var rutaDoctor = (0, _express.Router)();
rutaDoctor.get("/doctor", function (req, res) {
  res.json({
    "Doctor": _msj.user.DOCTOR
  });
});
var _default = exports["default"] = rutaDoctor;