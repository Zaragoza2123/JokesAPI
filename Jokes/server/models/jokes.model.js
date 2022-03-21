const mongoose = require("mongoose");

//utilize mongoose to create DB table

//instructions for the table 
const JokeSchema = new mongoose.Schema({
   // _id: Number, automatically creates an _id for each joke created
    setup: String ,
    punchline: String
},
    {timestamps: true}
)

// so itll be usable in mongoDb
const Joke = mongoose.model('Joke', JokeSchema );

module.exports = Joke;

