const express = require("express");
const app = express();
const morgan = require("morgan");
const mysql = require("mysql");

require("dotenv/config");

const api = process.env.API_URL;

//Middleware
app.use(express.json());
app.use(morgan("tiny"));

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: "haire dresser",
    image: "some_url",
  };
  res.send(products);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  res.send(newProduct);
});

require("./routes/routes.js")(app);

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "nodedb",
//   port: 3309,
// });

// con.connect((err) => {
//   if (err) throw err;
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("table created");
//   });
//   console.log("connected");
// });

app.listen(3000, () => {
  console.log("server is running now");
});
