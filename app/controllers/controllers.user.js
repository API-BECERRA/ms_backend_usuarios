import { success, error } from "../message/msj.js";
import { dbPool } from "../config/db.mysql.js";

export const createUser = (req,res) => {
    const datos = req.body; //para traer los datos que estan en la peticion.body
    console.log(datos);
    //res.(datos.APELLIDO) intentar mostar solo el apellido en la respuesta del body de thunder client
    success(req, res, 201, "post Ha ingresado un dato");
};

export const showUser = async(req, res) => {

    try {
        const respuesta = await dbPool.query("CALL SP_MOSTAR_USUARIO(1);");
        console.log(respuesta);
        success(req, res, 200, respuesta[0]); //[0] para que solo traiga el primer elemento sin el stuf que
        
    } catch (err) {
        error(req, res, 500, err)
        
    }
};

export const changeUser = (req, res) => {
    const datos = req.body;
    success(req, res, 200, "put ha modificado");
};

export const deleteUser = (req, res) => {
    const datos = req.body;
    success(req, res, 200, "delete ha eliminado");
};