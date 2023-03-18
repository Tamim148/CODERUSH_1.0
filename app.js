const express = require('express');
const app = express();
const {Client} = require('pg');
require('dotenv').config();
const userRoutes = require('./routes/user.routes');

app.use(userRoutes);

const client = new Client(process.env.dbURI);
client.connect((err) => {
  console.log(err ? err + " = hello": "Database Connected");
});

module.exports = app;