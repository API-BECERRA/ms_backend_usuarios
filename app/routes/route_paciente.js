import {Router} from "express"
import {user} from "../message/msj.js"

const rutaPaciente = Router();

rutaPaciente.get("/paciente", (req,res) => {
    res.json({
        "paciente" : user.PACIENTE
    })
})

export default rutaPaciente;