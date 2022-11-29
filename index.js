const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/sequelize');
const publicRouter = require('./routes/public.routes');

const app = express();
const port = process.env.PORT || 3001;

/* middleware */
app.use(cors());
app.use(express.json());

/* connection with db and create database table */
db.sequelize.sync();
//  db.sequelize.drop();

/* application routes */
app.use('', publicRouter);
app.listen(port, () => {
  console.log('listening from port', port);
});
