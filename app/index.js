import app from "./app.js";
import colors from "colors";
import {msjconsole} from "./message/msj.js"

app.listen(app.get("port"), () => {
    console.log(colors.bgCyan(`${msjconsole + app.get("port")}`));
});