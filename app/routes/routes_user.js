import { Router } from "express";
import { changeUser, createUser, deleteUser, listarUsuario, showUser, logueoUser } from "../controllers/controllers.user.js";
import {verifyToken} from "../middleware/oaut.js"

const rutaUser = Router();

rutaUser.get ("/user/:id", showUser);   

rutaUser.get ("/user", listarUsuario);   

// POST para guardar o crear, debe ir la ruta y el nombre del controlador
rutaUser.post("/user", verifyToken ,createUser);

// para modificar 
rutaUser.put("/user",verifyToken,changeUser);

// para borrar 
rutaUser.delete("/user",verifyToken,deleteUser);

// para loguearse
rutaUser.post("/login", logueoUser);

export default rutaUser;