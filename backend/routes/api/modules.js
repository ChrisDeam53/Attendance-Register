//
//INCLUDES AND HANDLES
//

//Includes
const express = require("express");
//const mongodb = require("mongodb"); //For when Mongo gets added in

//Controller path handle
const modulesController = require('../../controllers/modules.controller.js');

//Router handle
const router = express.Router();

//
//ROUTING LOGIC
//

//Note that because this file is used through an app.x command, the '/' below expands to the original router's path, in this case '/modules/'
router.get('/', modulesController)

router.get('/:id', modulesController)

router.get('/:id/attendanceIndicator', modulesController)

router.get('/:id/semesterRegistration', modulesController)

module.exports = router;