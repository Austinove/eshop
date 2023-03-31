const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");
const cors = require("cors");

require("dotenv/config");

const api = process.env.API_URL;

//Middleware
app.use(express.json());
app.use(morgan("tiny"));

require("./routes/routes.js")(app);

app.listen(3000, () => {
  console.log("server is running now");
});
