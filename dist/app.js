"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.js"));
_dotenv["default"].config();
var app = (0, _express["default"])();

//middleware
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.set("port", process.env.PORT);

//Rutas
// app.use("/", rutaMain); //para poder utilizar rutaMain
app.use("/", _index["default"]); //ahora las llamamos a las dos rutas desde una sola ruta
var _default = exports["default"] = app;