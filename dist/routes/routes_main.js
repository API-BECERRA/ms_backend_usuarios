"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireWildcard(require("express"));
var _msj = require("../message/msj.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var rutaMain = (0, _express.Router)();
var app = (0, _express["default"])();
var mensaje = _msj.MESSAGE;
app.set("home", mensaje.HOME);
app.set("galery", mensaje.GALERY);
app.set("about", mensaje.ABOUT);
app.set("contact", mensaje.CONTACT);
rutaMain.get("/home", function (req, res) {
  res.json({
    "home": app.get("home")
  });
});
rutaMain.get("/gallery", function (req, res) {
  res.json({
    "gallery": app.get("gallery")
  });
});
rutaMain.get("/about", function (req, res) {
  res.json({
    "about": app.get("about")
  });
});
rutaMain.get("/contact", function (req, res) {
  res.json({
    "contact": app.get("contact")
  });
});
var _default = exports["default"] = rutaMain;