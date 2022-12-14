const {Schema, model}=require('mongoose');
const dateFormat= require('../utils/dateFormat');

const snippetSchema= new Schema({
    snippetTitle:{
        type:String,
        trim: true,
    },
    snippetDescription: {
        type: String,
        trim: true,
    },
    snippetText:{
        type:String,
        trim: true,
    },
    snippetAuthor:{
        type:String, 
        // required: true,
        trim:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        get: (timestamp)=> dateFormat(timestamp),
    },
    comments: [
        {
          commentText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
          },
          commentAuthor: {
            type: String,
            required: true,
          },
          createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        },
      ],


})

const Snippet= model('Snippet', snippetSchema)
module.exports= Snippet;