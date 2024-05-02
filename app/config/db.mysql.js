import { createPool } from "mysql2/promise";
import {config} from "dotenv";

config();

export const dbPool = createPool({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE

});



// export const dbPool = createPool({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "",
//     database: "ejercicio"
// });