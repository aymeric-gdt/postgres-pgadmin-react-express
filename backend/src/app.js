const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./routes');

const cors = require('cors');
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

app.use('/api', routes);

const port = process.env.BACKEND_PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
