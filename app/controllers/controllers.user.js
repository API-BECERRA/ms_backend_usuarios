import { success, error } from "../message/msj.js";
import { dbPool } from "../config/db.mysql.js";

export const createUser = async(req,res) => {
    const nombre = req.body.NOMBRE //para traer los datos que estan en la peticion.body
    const usuario = req.body.USUARIO;
    const claveSincifrar = req.body.CLAVE;
    const clave = claveSincifrar;

    try {
        const respuesta = await dbPool.query(`CALL 	SP_CREAR_USUARIO('${nombre}', '${usuario}', '${clave}')`);
        if(respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Usuario creado");

        }else{
            error(req, res, 400, "no se pudo agregar el usuario")

        } 
        
    } catch (err) {
        error(req, res, 400, err)
    }
    
};

export const showUser = async(req, res) => {
    let id = req.params['id'];
    try {
        const respuesta = await dbPool.query(`CALL SP_MOSTAR_USUARIO(${id});`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]); //[0] para que solo traiga el primer elemento sin el stuf que
        
    } catch (err) {
        error(req, res, 500, err)
        
    }
};

export const listarUsuario = async(req, res) => {
    try {
        const respuesta = await dbPool.query(`CALL SP_MOSRTAR_TODOS_USUARIOS();`);
        console.log(respuesta);
        success(req, res, 200, respuesta[0]); //[0] para que solo traiga el primer elemento sin el stuf que
        
    } catch (err) {
        error(req, res, 500, err)
        
    }
};

export const changeUser = async(req, res) => {
    const nombre = req.body.NOMBRE //para traer los datos que estan en la peticion.body
    const usuario = req.body.USUARIO;
    const claveSincifrar = req.body.CLAVE;
    const id = req.body.ID;
    const clave = claveSincifrar;

    try {
        const respuesta = await dbPool.query(`CALL SP_MODIFICAR_USUARIO('${id}','${nombre}', '${usuario}', '${clave}')`);
        if(respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Fue modificado el usuario: "+nombre);

        }else{
            error(req, res, 400, "no se pudo modoficar el usuario")
        } 
        
    } catch (err) {
        error(req, res, 400, err)
    }
};

export const deleteUser = async(req, res) => {
    const id = req.body.ID;

    try {
        const respuesta = await dbPool.query(`CALL SP_ELIMINAR_USUARIO('${id}')`);
        if(respuesta[0].affectedRows == 1) {
            success(req, res, 201, "Usuario fue eliminado");

        }else{
            error(req, res, 400, "no se pudo eliminar el usuario")
        } 
        
    } catch (err) {
        error(req, res, 400, err)
    }
};