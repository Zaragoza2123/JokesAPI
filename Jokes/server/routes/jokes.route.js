const JokeController = require('../controllers/jokes.controller');


module.exports = (app) => {
    app.get('/api/hello', JokeController.helloWorld);
    app.get('/api/jokes', JokeController.getAllJokes);
    app.post('/api/jokes', JokeController.createJoke);
    app.get('/api/jokes/:_id', JokeController.getOneJoke);
    app.put('/api/jokes/:_id', JokeController.updateOneJoke);
    app.delete('/api/jokes/:_id', JokeController.deleteOneJoke);
}