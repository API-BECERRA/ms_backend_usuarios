import app from "./app/app.js";
import colors from "colors";
import {msjconsole} from "./app/message/msj.js"

app.listen(app.get("port"), () => {
    console.log(colors.bgCyan(`${msjconsole + app.get("port")}`));
})