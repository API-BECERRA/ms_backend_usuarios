"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _msj = require("../message/msj.js");
var rutaPaciente = (0, _express.Router)();
rutaPaciente.get("/paciente", function (req, res) {
  res.json({
    "paciente": _msj.user.PACIENTE
  });
});
var _default = exports["default"] = rutaPaciente;