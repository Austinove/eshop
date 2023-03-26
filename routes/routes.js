module.exports = (app) => {
  const todos = require("../controller/controller.js");

  //create a newtodo
  app.post("/todos", todos.create);

  //retrieve all todos
  app.get("/todos", todos.findAll);

  //retrieve a todo
  app.get("/todos/:id", todos.findOne);

  //update a todo
  app.put("/todos/:id", todos.update);

  //delete a todo by id
  app.delete("/todos/:id", todos.delete);
};
