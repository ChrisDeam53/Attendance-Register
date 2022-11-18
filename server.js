//
//INCLUDES AND HANDLES
//

//Includes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Express handle
const app = express();

//Views path handle
const path = __dirname + '/build/';

//Port handle
const PORT = process.env.PORT || 8081;

//Bodyparser handles - only use these on routes where they are needed, according to the context
//Parse requests of content-type - application/json
const jsonParser = bodyParser.json()
//Parse requests of content-type - application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: true })

//Route handles
const login = require('./backend/routes/api/login')
const modules = require('./backend/routes/api/modules')

//
//MIDDLEWARE REGISTRATION
//

//Serving static pages
app.use(express.static(path));

//Cors setup
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));


//URI routing logic - args are (route, parser, callback)
//Remember to include next() and the relevant argument for the callback if a given middleware layer doesn't conclude all the processing that needs to be done for that call

//Login page
app.use('/login', urlencodedParser, login); //"if the URI has the right filepath, use the exported routed from this routing file"

//Modules page
app.use('/modules', urlencodedParser, modules);

//Catchall route - if no route has been defined for a given path, execute this logic
app.all('*', function(request, response) {
  response.redirect('/');
});


//Listen/startup logic
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Ah, yes, the server is made out of cheese on port ${PORT}.`);
});
