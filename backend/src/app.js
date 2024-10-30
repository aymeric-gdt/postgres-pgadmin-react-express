const express = require('express');
require('dotenv').config();

const app = express();
const routes = require('./routes');

const cors = require('cors');
app.use(cors());

app.use(express.json());

const crudRoutes = require('./routes/crud');
app.use('/api/items', crudRoutes);

const port = process.env.BACKEND_PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
