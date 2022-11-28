const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/sequelize');

const app = express();
const port = process.env.PORT || 3001;

/* middleware */
app.use(cors());
app.use(express.json());

/* 
application routes
*/
app.get('/', (req, res) => {
  res.status(200).json('Hello');
});

db.sequelize.sync({ force: true });
// db.sequelize.drop();
app.listen(port, () => {
  console.log('listening from port', port);
});
