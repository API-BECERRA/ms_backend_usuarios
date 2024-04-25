import {user} from "../message/msj.js"
import {Router} from "express";

const rutaDoctor = Router();


rutaDoctor.get("/doctor", (req, res) =>{
    res.json({
        "Doctor" : user.DOCTOR
    })
})

export default rutaDoctor;

