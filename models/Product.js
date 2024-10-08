const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type:String,
        trim:true,
        required:true
    } , 
    author: {
        type:String,
        trim:true,
        required:true
    } , 
    genre: {
        type:String,
        trim:true,
        required:true
    } , 
    publicationYear: {
        type:Number,
        trim:true,
        required:true
    } , 
    bookTitle: {
        type:String,
        trim:true,
        required:true
    } , 
    
    price: {
        type:Number,
        // min:0,
        required:true
    } ,
    
    
}, {timestamps:true})

// middleware jo BTS mongodb operations karwane par use hota hai and iske andar pre nd post middleware hote hai which are basically used over the schema and before the model is js class.


let Product = mongoose.model('Product' , bookSchema);
module.exports = Product;