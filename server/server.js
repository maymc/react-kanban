//SERVER SIDE

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

//GET /tasks - get all tasks in Tasks table in the DB and send requested data back to client
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

  const newTask = {
    title: req.body.title,
    body: req.body.body,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  };

  console.log("\nNew task check:", newTask);

  Tasks
    .forge(newTask)
    .save()
    .then(() => {
      return Tasks
        .fetchAll()
        .then(tasks => {
          res.json(tasks.serialize());
        })
    })
    .catch(err => {
      console.log('POST - adding task error', err);
      res.json("NO WORKING");
    });
})


//PUT
app.put("/editTask/", (req, res) => {
  console.log("\n---> Backend PUT /editTask");
  // console.log("\nBackend - PUT req.params:", req.params);
  console.log("\nBackend - PUT req.body:", req.body);

  // const { id } = req.params;
  // console.log("\n Check id:", id);

  const updatedTask = {
    title: req.body.title,
    body: req.body.body,
    priority: req.body.priority,
    status: req.body.status,
    createdBy: req.body.createdBy,
    assignedTo: req.body.assignedTo
  }

  Tasks
    .where('id', req.body.id)
    .fetch()
    .then(results => {
      console.log("\nBackend - PUT results:", results);
      results.save(updatedTask);
      return Tasks
        .fetchAll()
        .then(tasks => {
          res.json(tasks.serialize());
        })
    })
    .catch(err => {
      console.log("Backend PUT didn't work");
      res.json("FAILED");
    })

})

//DELETE
app.delete("/deleteTask", (req, res) => {

})






app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})