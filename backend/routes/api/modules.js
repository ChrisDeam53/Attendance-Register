//
//INCLUDES AND HANDLES
//

//Includes
const express = require("express");

//Controller path handle
const modulesController = require('../../controllers/modules.controller.js');
const groupController = require('../../controllers/group.controller.js');

//Router handle
const router = express.Router();

//
//ROUTING LOGIC
//

//Note that because this file is used through an app.x command, the '/' below expands to the original router's path, in this case '/modules/'
router.get('/', modulesController.findall)

router.get('/:moduleId', groupController.findall) //to get the moduleId, use req.params.moduleId, etc.

//router.get('/:id/:id', modulesController)

router.get('/:moduleId/:groupId/attendanceIndicator', modulesController.getAttendanceIndicator)    //attendance data->donut format logic

router.get('/:moduleId/:groupId/semesterRegistration', modulesController.getSemesterRegistration)    //attendance data->table format logic

module.exports = router;