const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

console.log("Environ:", process.env.NODE_ENV);
console.log("process.env.SERVER_PORT", process.env.SERVER_PORT);
console.log("process.env.CLIENT_PORT", process.env.CLIENT_PORT);
console.log("process.env.PORT", process.env.PORT);

// If this is prod, serve the client build dir and set port
if (process.env.NODE_ENV === "production") {
  app.set('port', (process.env.PORT || 3001));
  app.use(express.static(path.join(__dirname, '../client/build')));
} else {
  app.set('port', (process.env.SERVER_PORT || 3001));
}

// Enable routes with /api prefix
const api_routes = require('./api_routes');
app.use('/api', api_routes);


app.listen(app.get('port'), () => {
  console.log(`Server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

