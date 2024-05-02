import dotenv from "dotenv";
dotenv.config();
import express from "express";
import ruta from "./routes/index.js"

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set("port", process.env.PORT);

//Rutas
// app.use("/", rutaMain); //para poder utilizar rutaMain
app.use("/", ruta); //ahora las llamamos a las dos rutas desde una sola ruta

export default app;

