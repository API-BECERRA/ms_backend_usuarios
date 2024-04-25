import dotenv from "dotenv";
dotenv.config();
import express from "express";
import rutaMain from "./routes/routes_main.js";
import rutaDoctor from "./routes/route_doctor.js"
import rutaPaciente from "./routes/route_paciente.js";
import rutaUser from "./routes/routes_user.js";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set("port", process.env.PORT);

//Rutas
app.use("/", rutaMain); //para poder utilizar rutaMain
app.use("/", rutaDoctor);
app.use("/", rutaPaciente);
app.use("/api", rutaUser)

export default app;

