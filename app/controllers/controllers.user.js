import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { success, error } from "../message/msj.js";
import { dbPool } from "../config/db.mysql.js";
import { config } from "dotenv";

config();


export const createUser = async(req,res) => {
    const nombre = req.body.nombre //para traer los datos que estan en la peticion.body
    const usuario = req.body.usuario;
    const claveSincifrar = req.body.clave;
    
    try {
        //para cifrar la clave, el segundo parametro es una logitud, que es un numerito que uno quiera 
        const hash = await bcrypt.hash(claveSincifrar, 2);
        const contra = hash;

        const respuesta = await dbPool.query(`CALL 	SP_CREAR_USUARIO('${nombre}', '${usuario}', '${contra}')`);
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
        success(req, res, 200, respuesta[0][0]); //[0] para que solo traiga el primer elemento sin el stuf que
        
    } catch (err) {
        error(req, res, 500, err);
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
    const id = req.body.id;

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

export const logueoUser = async(req, res) => {
    // otras maneras de inicializacion de las variables
    const {usuario, clave} = req.body;

    console.log(req.body);
    try {
        const respuesta = await dbPool.query(`CALL SP_LOGUEAR_USER('${usuario}')`);

        console.log(respuesta[0][0][0].CLAVE);

        if(respuesta[0][0] == 0){
            // const error = new Error(error.message); //Esta generando error
            // res.status(404).json({ error : error.message})
            error(req, res, 400, "usuario no existe");
            return;
        }

        //match es igual, instruccion para traer la clave
        const match = await bcrypt.compare(clave, respuesta[0][0][0].CLAVE);


        //si es diferente de true, osea no hay match
        if(!match){
            error(req, res, 401, "Clave errada");
            return;
        }


        //para crear un token, para mantener la sesion iniciada
        let pyload = {
            "usuario" : usuario,
            "nombre" : respuesta[0][0][0].NOMBRE
        };

        let token = jwt.sign(
            pyload,
            process.env.TOKEN_PRIVATEKEY,
            {
                expiresIn : process.env.TOKEN_EXPIRES_IN
            }
        );

        success(req, res, 200, {token});

    } catch (err) {
        // let message = "Error en el servidor, por favor intentar más tarde";
        error(req, res, 500, JSON.stringify({message : "Error en el servidor, por favor intentar más tarde"}));
    }
}