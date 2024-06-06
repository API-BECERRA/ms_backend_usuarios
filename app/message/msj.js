export const MESSAGE =  {"HOME": "HOLA HOME", "GALERY": "HOLA GALLERY", "ABOUT": "HOLA ABOUT", "CONTACT": "HOLA CONTACT"}

export const msjconsole = "Bakend - Estoy en el puerto: http://localhost:";

export const user = {"DOCTOR" : {"CARGO":"DOCTOR", "NAME" : "Jaime londoño", "EDAD" : "43"}, "PACIENTE" : {"CARGO" : "PACIENTE","NOMBRE": "LOLA LITA", "EDAD" : "18"}}

export const success = (req, res, status = 500, mensaje = "") => {
    res.status(status).json({
            error:false,
            status:status,
            body:mensaje
        })
};
export const error = (req, res, status = 500,mensaje = "") => {
    res.status(status).json({
            error:true,
            status:status,
            body: JSON.parse(mensaje)
        })
};