import { Router } from "express";
import { MESSAGE } from "../message/msj.js"
import express from "express";

const rutaMain = Router();
const app = express();
const mensaje = ( MESSAGE );

app.set("home", mensaje.HOME);
app.set("galery", mensaje.GALERY);
app.set("about", mensaje.ABOUT);
app.set("contact", mensaje.CONTACT);


rutaMain.get("/home", (req,res) => {
    res.json({
        "home" :  app.get("home")
    })
});

rutaMain.get("/gallery", (req, res) => {
    res.json({
        "gallery" :  app.get("gallery")
    })
});

rutaMain.get("/about", (req, res) => {
    res.json({
        "about" :  app.get("about")
    })
});

rutaMain.get("/contact", (req, res) => {
    res.json({
        "contact" :  app.get("contact")
    })
});

export default rutaMain