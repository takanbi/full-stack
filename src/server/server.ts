import express from "express";
//console.log(express);
import config from "./config";
const server = express();
server.use(express.static("dist"));
server.set("view engine", "ejs");
server.use("/", (req, res) => {
    // res.send("Hello Express");
    res.render("index", 
    {"content": "EJS is <em>cool</em>"});
});
// server.listen("8080", "0.0.0.0", () => {
//     console.info(
//         "Express server is listening at http://0.0.0.0:8080"
//     );
// });
server.listen(config.PORT, config.HOST, () => {
    console.log(
        `Express server is listening at ${config.SERVER_URL}`
    );
});