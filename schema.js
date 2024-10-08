
// schema for your server side validation\\
const Joi = require('joi');

const bookSchema = Joi.object({
    
    title: Joi.string().required(),
    price: Joi.string().min(0).required(),
    bookTitle: Joi.string().required()  ,
    publicationYear: Joi.string().min(0).required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),

});



module.exports = {bookSchema}












