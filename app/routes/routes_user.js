import { Router } from "express";
import {success} from "../message/msj.js"

const rutaUser = Router();

rutaUser.get ("/user", (req,res) => {
    success(req, res, 200, "conectado con usuario");
});

// POST para guardar o crear
rutaUser.post("/user", (req,res) => {
    const datos = req.body; //para traer los datos que estan en la peticion.body
    console.log(datos);
    //res.(datos.APELLIDO) intentar mostar solo el apellido en la respuesta del body de thunder client
    success(req, res, 200, "post Ha ingresado un dato");
})

export default rutaUser;