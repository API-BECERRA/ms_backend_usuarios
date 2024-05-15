"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showUser = exports.logueoUser = exports.listarUsuario = exports.deleteUser = exports.createUser = exports.changeUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _msj = require("../message/msj.js");
var _dbMysql = require("../config/db.mysql.js");
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var nombre, usuario, claveSincifrar, hash, clave, respuesta;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = req.body.nombre; //para traer los datos que estan en la peticion.body
          usuario = req.body.usuario;
          claveSincifrar = req.body.clave;
          _context.prev = 3;
          _context.next = 6;
          return _bcrypt["default"].hash(claveSincifrar, 2);
        case 6:
          hash = _context.sent;
          clave = hash;
          _context.next = 10;
          return _dbMysql.dbPool.query("CALL \tSP_CREAR_USUARIO('".concat(nombre, "', '").concat(usuario, "', '").concat(clave, "')"));
        case 10:
          respuesta = _context.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 201, "Usuario creado");
          } else {
            (0, _msj.error)(req, res, 400, "no se pudo agregar el usuario");
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](3);
          (0, _msj.error)(req, res, 400, _context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 14]]);
  }));
  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var showUser = exports.showUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params['id'];
          _context2.prev = 1;
          _context2.next = 4;
          return _dbMysql.dbPool.query("CALL SP_MOSTAR_USUARIO(".concat(id, ");"));
        case 4:
          respuesta = _context2.sent;
          console.log(respuesta);
          (0, _msj.success)(req, res, 200, respuesta[0][0]); //[0] para que solo traiga el primer elemento sin el stuf que
          _context2.next = 12;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          (0, _msj.error)(req, res, 500, _context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return function showUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var listarUsuario = exports.listarUsuario = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var respuesta;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _dbMysql.dbPool.query("CALL SP_MOSRTAR_TODOS_USUARIOS();");
        case 3:
          respuesta = _context3.sent;
          console.log(respuesta);
          (0, _msj.success)(req, res, 200, respuesta[0]); //[0] para que solo traiga el primer elemento sin el stuf que
          _context3.next = 11;
          break;
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          (0, _msj.error)(req, res, 500, _context3.t0);
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function listarUsuario(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var changeUser = exports.changeUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var nombre, usuario, claveSincifrar, id, clave, respuesta;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          nombre = req.body.NOMBRE; //para traer los datos que estan en la peticion.body
          usuario = req.body.USUARIO;
          claveSincifrar = req.body.CLAVE;
          id = req.body.ID;
          clave = claveSincifrar;
          _context4.prev = 5;
          _context4.next = 8;
          return _dbMysql.dbPool.query("CALL SP_MODIFICAR_USUARIO('".concat(id, "','").concat(nombre, "', '").concat(usuario, "', '").concat(clave, "')"));
        case 8:
          respuesta = _context4.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 201, "Fue modificado el usuario: " + nombre);
          } else {
            (0, _msj.error)(req, res, 400, "no se pudo modoficar el usuario");
          }
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](5);
          (0, _msj.error)(req, res, 400, _context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[5, 12]]);
  }));
  return function changeUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, respuesta;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id = req.body.ID;
          _context5.prev = 1;
          _context5.next = 4;
          return _dbMysql.dbPool.query("CALL SP_ELIMINAR_USUARIO('".concat(id, "')"));
        case 4:
          respuesta = _context5.sent;
          if (respuesta[0].affectedRows == 1) {
            (0, _msj.success)(req, res, 201, "Usuario fue eliminado");
          } else {
            (0, _msj.error)(req, res, 400, "no se pudo eliminar el usuario");
          }
          _context5.next = 11;
          break;
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](1);
          (0, _msj.error)(req, res, 400, _context5.t0);
        case 11:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 8]]);
  }));
  return function deleteUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var logueoUser = exports.logueoUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var _req$body, usuario, clave, respuesta, match, pyload, token;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          // otras maneras de inicializacion de las variables
          _req$body = req.body, usuario = _req$body.usuario, clave = _req$body.clave;
          _context6.prev = 1;
          _context6.next = 4;
          return _dbMysql.dbPool.query("CALL SP_BUSCAR_USUARIO('".concat(usuario, "')"));
        case 4:
          respuesta = _context6.sent;
          console.log(respuesta[0][0][0].CLAVE);
          if (!(respuesta[0][0] == 0)) {
            _context6.next = 9;
            break;
          }
          // const error = new Error(error.message); //Esta generando error
          // res.status(404).json({ error : error.message})
          (0, _msj.error)(req, res, 400, "usuario no existe");
          return _context6.abrupt("return");
        case 9:
          _context6.next = 11;
          return _bcrypt["default"].compare(clave, respuesta[0][0][0].CLAVE);
        case 11:
          match = _context6.sent;
          if (match) {
            _context6.next = 15;
            break;
          }
          (0, _msj.error)(req, res, 401, "Clave errada");
          return _context6.abrupt("return");
        case 15:
          //para crear un token, para mantener la sesion iniciada
          pyload = {
            "usuario": usuario,
            "nombre": respuesta[0][0][0].NOMBRE
          };
          token = _jsonwebtoken["default"].sign(pyload, process.env.TOKEN_PRIVATEKEY, {
            expiresIn: process.env.TOKEN_EXPIRES_IN
          });
          (0, _msj.success)(req, res, 200, {
            token: token
          });
          _context6.next = 23;
          break;
        case 20:
          _context6.prev = 20;
          _context6.t0 = _context6["catch"](1);
          // let message = "Error en el servidor, por favor intentar más tarde";
          (0, _msj.error)(req, res, 500, JSON.stringify({
            message: "Error en el servidor, por favor intentar más tarde"
          }));
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 20]]);
  }));
  return function logueoUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();