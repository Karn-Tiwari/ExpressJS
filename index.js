// ExpressJS is a web application framework that provides you with a simple API to build websites, web apps and back ends. With ExpressJS, you need not worry about low level protocols, processes, etc.

const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
