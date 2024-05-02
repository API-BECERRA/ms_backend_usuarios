import {Router} from "express";
import rutaMain from "./routes_main.js";
import rutaUser from "./routes_user.js";

const ruta = Router();

ruta.use("/", rutaMain);
ruta.use("/api", rutaUser);

export default ruta;