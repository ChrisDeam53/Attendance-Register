//
// INCLUDES AND HANDLES
//

// Includes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Express handle
const app = express();

// Views path handle
const path = __dirname + '/build/';

// Port handle
const PORT = process.env.PORT || 8080;

// Bodyparser handles - only use these on routes where they are needed, according to the context
// Parse requests of content-type - application/jsonP
const jsonParser = bodyParser.json()
// Parse requests of content-type - application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: true })

// Route handles
const login = require('./backend/routes/api/login')
const table = require('./backend/routes/api/tableView')

//
// MIDDLEWARE REGISTRATION
//

// Serving static pages
app.use(express.static(path));

// Cors setup
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


// URL routing logic - args are (route, parser, callback)
// Remember to include next() and the relevant argument for the callback if a given middleware layer doesn't conclude all the processing that needs to be done for that call

// Login page
app.use('/login', urlencodedParser, (request, response) => {
  response.sendFile(path + "index.html");
}); // If the URL has the right filepath, use the exported routed from this routing file

// Table page [TESTING PURPOSES]
app.use('/tableView', urlencodedParser, (request, response) => {
  response.sendFile(path + "index.html");
}); // If the URL has the right filepath, use the exported routed from this routing file

// View Attendance Indicators [TESTING PURPOSES]
app.use('/pieView', urlencodedParser, (request, response) => {
  response.sendFile(path + "index.html");
}); // If the URL has the right filepath, use the exported routed from this routing file

// Home Page [TESTING PURPOSES]
app.use('/home', urlencodedParser, (request, response) => {
  response.sendFile(path + "index.html");
}); // If the URL has the right filepath, use the exported routed from this routing file

// Catch all route - If no route has been defined for a given path, execute this logic
app.all('*', function(request, response) {
  response.redirect('/');
});


// Listen/startup logic
// Set port, listen for requests
app.listen(PORT, () => {
  console.log(`Ah, yes, the server is made out of cheese on port ${PORT}.`);
});
