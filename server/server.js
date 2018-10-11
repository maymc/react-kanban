const express = require("express");
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 3333;
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
})