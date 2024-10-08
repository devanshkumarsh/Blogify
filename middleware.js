const {bookSchema} = require('./schema')


const validateProduct = (req,res,next)=>{
    const {title , author , genre, publicationYear, bookTitle ,price} = req.body;
    const {error} = bookSchema.validate({title , author , genre, publicationYear, bookTitle ,price})
    if(error){
        return res.render('error', {err:error});
    }
    next();
}

const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error' , 'please login first');
        return res.redirect('/login');
    }
    next();
}



module.exports = {isLoggedIn  , validateProduct}
















