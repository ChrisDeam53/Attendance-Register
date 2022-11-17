const db = require("../models");
const modules = db.group;

//findall groups assigned to the the module
exports.findall = (req, res) => {
    // Validate request --needs some other validation logic presumably, checking auth token?  or 
    if (!req.params.moduleId) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }



    //below can just be done by chaining query commands - the 'filter' is done with 'where id is xyz' rather than as a completely seperate operation
    //within a specific module, load all the groups associated with it
    //then, filter out the groups that the user doesn't have access to (eg. only include groups that a lecturer can see)
    //then, ???

    /*  --ripped from carlos' codeberg
        const username = req.query.username;
    //We use req.query.name to get query string from the Request and consider it as condition for findAll() method.
    var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
    User
        .find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send( {
                message: 
                    err.message || "Some error occurred while retrieving Users."
            });
        });

    */
}
