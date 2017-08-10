// Require dependencies so that our app works////////////////////////////////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

var PORT = process.env.PORT || 8080;

app.get('/', function (req, res){
    res.send('hello world');
});

// BodyParser so that our server can interpret data sent to it////////////////////////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Router -- points to a series of route files////////////////////////////////////////////////////
// require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

// Listener ////////////////////////////////////////////////////
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});