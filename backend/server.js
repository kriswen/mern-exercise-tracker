const express = require('express'); // require express 
const cors = require('cors'); // require cors
const mongoose = require('mongoose'); // connect to mongoDB database

require('dotenv').config(); // can have our env var in .env file

const app = express(); // create express server
const port = process.env.PORT || 5000; //port of server will be on

app.use(cors()); //middleware
app.use(express.json()); // allow us to parse json

//IN ALTAS, select connect my application node.js 3.0 or later
const uri = process.env.ATLAS_URI; // mongoDB URI 
//start our connection
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
 
// require API endpoint routes file
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
// use the files
// when someon goes to our root url with '/exercise', it is going to load exercises router
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => { //what start the server, listing on port
    console.log(`Server is running on port: ${port}`);
});


//to start server command: nodemon server