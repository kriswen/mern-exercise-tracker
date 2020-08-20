// need express router, becuase it's the route we creating
const router = require('express').Router();
// require the mongoose user model
let User = require('../models/user.model');

//first endpoint handles incoming http GET request on the /users path
router.route('/').get((req, res) => { //GET 
  User.find() //find is mongoose method to get the list of all users from MongoDB database ( return a promise in JSON format)
    .then(users => res.json(users)) // return the users ( we got from DB) in JSON format
    .catch(err => res.status(400).json('Error: ' + err)); // return erro msg
});

//2nd endpoint handles incoming http POST request on /add path
router.route('/add').post((req, res) => { //POST 
  const username = req.body.username; //new username assign to username var

  const newUser = new User({username}); //create new user with the username just assigned

  newUser.save() // save new user to to database using save method
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update & delete for production

module.exports = router; // standard thing for router files