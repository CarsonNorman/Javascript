import {Author, Quote} from "../models/models.js";

export const getAllAuthors  = (req, res) =>{
    Author.find()
    .then((response) =>res.status(201).json({authors: response}))
    .catch(err => res.status(400).json({error: err}))
}
export const getOneAuthor = (req, res) =>{
    Author.findById(req.params.author)
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({error: err}))
}
export const createAuthor = (req, res) => {
    Author.create(req.body)
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({error: err}))
}
export const deleteAuthor = (req, res) =>{
    Author.findByIdAndRemove(req.params.author)
    .then(author => {
        author.quotes.forEach(el =>{
        Quote.findByIdAndDelete(el)
    }),
    res.status(204).json(author)
})
.catch(err => res.status(400).json({error: err}))
}
export const updateAuthor = (req, res) => {
    Author.findOneAndUpdate({id: req.params.author}, req.body,{new:true, runValidators:true})
        .then(response => res.status(204 ).json(response))
        .catch(err => res.status(400).json({error: err}))
}


export default {getAllAuthors, getOneAuthor, createAuthor, deleteAuthor, updateAuthor}