const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 7777;
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//Import in the Tasks model
const Tasks = require('./db/models/tasks_table.js');

app.get("/", (req, res) => {
  res.send("HELLLOOOO");
})

app.get('/tasks', (req, res) => {
  Tasks
    .fetchAll()
    .then(tasks => {
      res.json(tasks.serialize())
    })
    .catch(err => {
      console.log('error', err)
    })
})




app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})