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

app.get("/", (req, res) => {
  res.send("HELLLOOOO");
})

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

app.post('/new-task', (req, res) => {
  console.log("---> Backend POST /new-task");
  console.log("\nreq.body:", req.body);

  const task = req.body;
  console.log("\ntask:", task);

  const newTask = {
    id: task.id,
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
    .then(() => {
      res.redirect('/boards');
    })
    .catch(err => {
      console.log('POST - adding task error', err)
    });
})







app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})