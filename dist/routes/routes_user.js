"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _controllersUser = require("../controllers/controllers.user.js");
var _oaut = require("../middleware/oaut.js");
var rutaUser = (0, _express.Router)();
rutaUser.get("/user/:id", _controllersUser.showUser);
rutaUser.get("/user", _controllersUser.listarUsuario);

// POST para guardar o crear, debe ir la ruta y el nombre del controlador
rutaUser.post("/user", _oaut.verifyToken, _controllersUser.createUser);

// para modificar 
rutaUser.put("/user", _oaut.verifyToken, _controllersUser.changeUser);

// para borrar 
rutaUser["delete"]("/user", _oaut.verifyToken, _controllersUser.deleteUser);

// para loguearse
rutaUser.post("/login", _controllersUser.logueoUser);
var _default = exports["default"] = rutaUser;