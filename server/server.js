const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 7777;
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//Import in the Tasks model
const Tasks = require('./db/models/tasks_table.js');

//Returns already parsed info/object as "req.body"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes

//GET
app.get('/tasks', (req, res) => {
  console.log("--> Backend GET /tasks");
  Tasks
    .fetchAll()
    .then(tasks => {
      res.json(tasks.serialize())
    })
    .catch(err => {
      console.log('error', err)
    })
})

//POST
app.post('/newTask', (req, res) => {
  console.log("---> Backend POST /newTask");
  console.log("\nreq.body:", req.body);

  const task = req.body;
  console.log("\ntask:", task);

  const newTask = {
    title: task.title,
    body: task.body,
    priority: task.priority,
    status: task.status,
    createdBy: task.createdBy,
    assignedTo: task.assignedTo
  };

  console.log("\nNew task check:", newTask);

  Tasks
    .forge(newTask)
    .save()
    .then((tasks) => {
      return Tasks
        .fetchAll()
    })
    .then()
    .catch(err => {
      console.log('POST - adding task error', err)
    });
})

//PUT
app.put("/editTask", (req, res) => {

})

//DELETE
app.delete("/deleteTask", (req, res) => {

})






app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})