import { createAuthor, getOneAuthor, getAllAuthors, deleteAuthor, updateAuthor } from "../controllers/authors.controller.js";
import express from 'express'
import { createQuote, deleteQuote, getQuoteByAuthor, updateQuote, getQuoteById } from "../controllers/quotes.controller.js";
export const authorRouter = express.Router()

authorRouter
    .route('/')
    .get(getAllAuthors)
    .post(createAuthor)
    .delete(deleteQuote)

authorRouter
    .route('/:author')
    .get(getOneAuthor)
    .post(createQuote)
    .delete(deleteAuthor)
    .put(updateAuthor)

authorRouter
    .route('/quote/:id')
    .get(getQuoteById)
    .put(updateQuote)
    .delete(deleteQuote)

authorRouter
    .route('/:author/quotes')
    .get(getQuoteByAuthor)


export default authorRouter