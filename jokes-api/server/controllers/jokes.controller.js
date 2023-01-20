const { json } = require('express')
const Joke = require('../models/jokes.model')

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((AllJokes) => res.json({ jokes: AllJokes }))
        .catch((err) => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.createJoke = (req, res) => {
    if (req.body.setup.length > 10 && req.body.punchline.length > 3) {
        Joke.create(req.body)
            .then(newJoke => res.json({ joke: newJoke }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    } else {
        res.json({ message: 'Joke or punchline of inapproriate length' })
    }
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body,{ new: true, runValidators: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}