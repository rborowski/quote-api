const path = require('path');

const express = require('express');

const db = require('./data/database');

const errorHandlerMiddleware = require('./middlewares/error-handler')

const baseRoutes = require('./routes/quotes.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/quotes", baseRoutes)

app.use(errorHandlerMiddleware)

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });