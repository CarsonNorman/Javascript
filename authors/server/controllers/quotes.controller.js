import { Author, Quote } from '../models/models.js'

export const getAllQuotes = (req, res) => {
  Quote.find()
    .then((response) => res.status(201).json(response))
    .catch(err => res.status(400).json({ error: err }))
}
export const createQuote = (req, res) => {
  return Quote.create(req.body)
    .then((quote) => {
      res.json(quote);
      return Author.findByIdAndUpdate(
        req.body.author,
        {
          $push: {
            quotes: {
              _id: quote._id,
            }
          },
        });
        
    })
    .catch(err => res.status(400).json({ error: err }))

}
export const deleteQuote = (req, res) => {
  Quote.findOneAndDelete({_id: req.params.id })
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({ error: err }))
}
export const getQuoteByAuthor = (req, res) => {
  Author.findOne({_id: req.params.id})
  .then(response => res.status(201).json({quotes: response.quotes}))
  .catch(err => res.status(400).json({error: err}))
}
export const getQuoteById = (req, res) => {
  Quote.findOne({_id: req.params.id})
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({error: err}))
}
export const updateQuote = (req, res) => {
  Quote.findOneAndUpdate({_id: req.params.id }, req.body,{new:true, runValidators:true})
    .then(response => res.status(201).json(response))
    .catch(err => res.status(400).json({ error: err }))
}


export default { getAllQuotes, createQuote, deleteQuote, getQuoteByAuthor, updateQuote }