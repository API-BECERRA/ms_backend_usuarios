"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = exports.success = exports.msjconsole = exports.error = exports.MESSAGE = void 0;
var MESSAGE = exports.MESSAGE = {
  "HOME": "HOLA HOME",
  "GALERY": "HOLA GALLERY",
  "ABOUT": "HOLA ABOUT",
  "CONTACT": "HOLA CONTACT"
};
var msjconsole = exports.msjconsole = "Bakend - Estoy en el puerto: http://localhost:";
var user = exports.user = {
  "DOCTOR": {
    "CARGO": "DOCTOR",
    "NAME": "Jaime londoño",
    "EDAD": "43"
  },
  "PACIENTE": {
    "CARGO": "PACIENTE",
    "NOMBRE": "LOLA LITA",
    "EDAD": "18"
  }
};
var success = exports.success = function success(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: true,
    status: status,
    body: mensaje
  });
};
var error = exports.error = function error(req, res) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  var mensaje = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  res.status(status).json({
    error: true,
    status: status,
    body: JSON.parse(mensaje)
  });
};