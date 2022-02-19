const express = require("express");
const path = require("path");
const functions = require("./functions");
const app = express();
const port = process.env.PORT || 3000;
const zz = 0;

app.set("view engine", "hbs");

app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
    res.render("index", {
        pageTitle: "Lekcja ALK 19.02",
        subTitle: "Podtytuł",
        x: 4,
        y: zz > 9 ? functions.add(1,2) : null
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.listen(port, (err) => {
    if (err) {
        return console.log("Something went wrong...: ", err);
    }
    console.log(`The server is listening on port ${port}`);
});









// const http = require("http");

// Bez express.js

// const handler = (request, response) => {
//     console.log("sample message");
//     response.end("Hello World <h1>Moja pierwsza strona internetowa</h1>");
// }
// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port, () => {
//     console.log(`The server is listening on port ${port}`);
// });

// const functions = require("./functions")

// console.log("Hello World");
// functions.sayHello()
// functions.add(1, 2)