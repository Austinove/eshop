const mysql = require("mysql");
//connection configureations
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedb",
  port: 3309,
});

//connect to database
connection.connect((err) => {
  if (err) throw err;
  console.log("You are now connect with mysql database...");
});

//create and save a new todo
exports.create = (req, res) => {
  //validate request
  if (!req.body.description) {
    return res.status(400).send({
      message: "Todo sescription can not be empty",
    });
  }

  var params = req.body;
  console.log(params);

  connection.query(
    "INSERT INTO todos SET ? ",
    params,
    (error, results, fields) => {
      if (error) throw error;
      return res.send({
        data: results,
        message: "New todo has been created successfully",
      });
    }
  );
};

//retrieve and return all todos from the database
exports.findAll = (req, res) => {
  connection.query("SELET * FROM todos", (error, results, field) => {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};

//find a single todo with an id
exports.findOne = (req, res) => {
  connection.query(
    "SELECT * FROM todos WHERE id=?",
    [req.params.id],
    (error, results, field) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};

//update a todo identified by the id
exports.update = (req, res) => {
  //validate request
  if (!req.body.description) {
    return res.status(400).send({
      message: "Todo description can not be empty",
    });
  }

  console.log(req.params.id);
  console.log(req.body.description);
  connection.query(
    "UPDATE todo SET name=?, description=? where id=?",
    [req.body.name, req.body.description, req.params.id],
    (error, results, fields) => {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};

//Deleting todo
exports.delete = (req, res) => {
  console.log(req.body);
  connection.query(
    "DELETE FROM todos WHERE id",
    [req.body.id],
    (error, results, fields) => {
      if (error) throw error;
      res.end("Record has been deleted");
    }
  );
};
