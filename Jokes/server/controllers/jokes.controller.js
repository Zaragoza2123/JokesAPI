//in the jokes.controller import your model from the models file
const Joke = require('../models/jokes.model');

module.exports.helloWorld = (res,req)=>{
    res.json({msg:"hello world"})
}

module.exports.getAllJokes = (req, res)=>{
    Joke.find()
        .then(allJokes=>{
            res.json({results: allJokes})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
        
}

module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(newJoke=>{
            res.json({results: newJoke})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
}
module.exports.getOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id})
    .then(oneJoke=>{
        res.json({results: oneJoke})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.updateOneJoke = (req,res) => {
    Joke.findOneAndUpdate(
        {_id: req.params._id},
        req.body
    )
    .then(updatedJoke=>{
        res.json({results: updatedJoke})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.deleteOneJoke = (req,res) => {
    Joke.findOneAndDelete(
        {_id: req.params._id}
    )
    .then(deleteOneJoke=>{
        res.json({results: deleteOneJoke})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}