require('dotenv').config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const router = require('./app/router');

app.use(router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})