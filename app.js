const express = require("express");
const app = express();

require("dotenv/config");

const api = process.env.API_URL;

app.get(api + "/", (req, res) => {
  res.send("Hello API");
});

app.listen(3000, () => {
  console.log(api);
  console.log("server is running now");
});
