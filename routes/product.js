const express = require('express');
const Product = require('../models/Product');
const router = express.Router()
const {validateProduct , isLoggedIn} = require('../middleware')


// to show all the products
router.get('/book' , async(req,res)=>{
    try{
        let products = await Product.find({});
        res.render('book/index' , {products});
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// to show the form for new product
router.get('/book/new' , isLoggedIn , (req,res)=>{
    try{
        res.render('book/new');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually add the product
router.post('/book' , validateProduct , isLoggedIn ,   async(req,res)=>{
    try{
        let {title , author , genre, publicationYear, bookTitle ,price} = req.body;
        await Product.create({title , author , genre, publicationYear, bookTitle ,price})
        req.flash('success' , 'Product added successfully');
        res.redirect('/book');
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// to show a particular product
router.get('/book/:id' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('book/show' , {foundProduct , msg:req.flash('msg')})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})


// form to edit the product
router.get('/book/:id/edit', isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        res.render('book/edit' , {foundProduct})
    }
    catch(e){
        res.status(500).render('error' , {err:e.message});
    }
})

// to actually edit the data in db
router.patch('/book/:id' , isLoggedIn , validateProduct ,  async(req,res)=>{
    try{
        let {id} = req.params;
        let {author , genre, publicationYear, bookTitle ,price}= req.body;
        await Product.findByIdAndUpdate( id , { author , genre, publicationYear, bookTitle ,price}  )
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/book/${id}`);
    }
    catch(e){
        console.log("mesage",e)
        // res.locals.error = e;
        res.status(500).render('error' , {err:e.message});
        // res.status(500).json({msg:e})
    }
})


// to delete a product
router.delete('/book/:id' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        const product = await Product.findById(id);


        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/book');
    }
    catch(e){
        res.status(500).render('error' , {err : e.message});
    }
})


module.exports = router;

