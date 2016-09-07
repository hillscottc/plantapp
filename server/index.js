const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.set('port', (process.env.API_PORT || 3001));
app.use(bodyParser.json());
app.use(morgan("dev"));

// Connect to db
const connStr = process.env.MONGO_URL || 'mongodb://localhost/plantsdb';
mongoose.connect(connStr, function (error) {
  if (error) {
    console.log(error);
  }
});


// Enable routes with /api prefix
const api_routes = require('./api_routes');
app.use('/api', api_routes);


app.listen(app.get('port'), () => {
  console.log(`Server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

