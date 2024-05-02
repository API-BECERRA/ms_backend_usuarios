import { success } from "../message/msj.js";

export const createUser = (req,res) => {
    const datos = req.body; //para traer los datos que estan en la peticion.body
    console.log(datos);
    //res.(datos.APELLIDO) intentar mostar solo el apellido en la respuesta del body de thunder client
    success(req, res, 201, "post Ha ingresado un dato");
};

export const showUser = (req, res) => {
    success(req, res, 200, "conectado con usuario");
};

export const changeUser = (req, res) => {
    const datos = req.body;
    success(req, res, 200, "put ha modificado");
};

export const deleteUser = (req, res) => {
    const datos = req.body;
    success(req, res, 200, "delete ha eliminado");
};