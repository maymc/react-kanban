const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 7777;
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.get("/", (req, res) => {
  res.send("HELLLOOOO");
})




app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})