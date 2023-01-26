import { model, Schema } from "mongoose";

const AuthorSchema = new Schema({
    name:{
        type: String,
        min: 3,
        required: [true, 'Please enter name']
    },
    quotes : [{
        type : Schema.Types.ObjectId,
        ref: "Quote"
    }]
})


const QuoteSchema = new Schema({
    title:{
        type: String,
        min: 5,
        required: [true, 'Please enter quote title']
    },
    body :{
        type: String,
        min: 10,
        required: [true, 'Please enter quote body']
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: [true, 'Enter author ID']
    }
})

export const Author = model('Author', AuthorSchema)
export const Quote = model('Quote', QuoteSchema)


