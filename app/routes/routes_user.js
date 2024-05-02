import { Router } from "express";
import { changeUser, createUser, deleteUser, showUser } from "../controllers/controllers.user.js";

const rutaUser = Router();

rutaUser.get ("/user", showUser);

// POST para guardar o crear, debe ir la ruta y el nombre del controlador
rutaUser.post("/user", createUser);

// para modificar 
rutaUser.put("/user",changeUser);

// para borrar 
rutaUser.delete("/user",deleteUser);

export default rutaUser;