//Needed Imports, express, selected port, and mongoose 
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded( {extended: true}) );

//infrom server to run the config folder file for the connection to mongoDb using mongoose
require("./server/config/mongoose.config")

//infrom server to connect to the route
require("./server/routes/jokes.route")(app)





//always at the bottom
app.listen( port, () => console.log(`Listening on port: ${port}`) );