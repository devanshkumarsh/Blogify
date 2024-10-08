const mongoose = require('mongoose');

const Product = require('./models/Product');


const products = [
    {
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    },
    {
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    },
    {
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    },
    {
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    },
    {
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    },{
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    }
    ,{
        title:"Thomas SHelby",
        author:"Mr. Robert Wadra",
        genre:"Violent , Crime",
        publicationYear:2020,
        bookTitle:"Peaky Blinders",
        price:3999
    }
]

async function seedDB(){
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data seeded successfully");
}

module.exports = seedDB;


