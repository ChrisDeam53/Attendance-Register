//
//INCLUDES AND HANDLES
//

//Includes
const express = require("express");
//const mongodb = require("mongodb"); //For when Mongo gets added in

//Views path handle
const path = __dirname + '../../../build';

//Router handle
const router = express.Router();

//
//ROUTING LOGIC
//

//Note that because this file is used through an app.x command, the '/' below expands to '/login/'
router.get('/modules', (request, response) =>{
    response.sendFile(path + "index.html");
})

router.get('/modules/:id', (request, response) =>{
    response.sendFile(path + "index.html");
})

router.get('/modules/:id/attendanceIndicator', (request, response) =>{
    response.sendFile(path + "index.html");
})

router.get('/modules/:id/semesterRegistration', (request, response) =>{
    response.sendFile(path + "index.html");
})




module.exports = router;