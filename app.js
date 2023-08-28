const express = require('express');

const problems = require('./routes/problems');

const app = express();

app.use('/api/v1/problems', problems);

module.exports = app;
