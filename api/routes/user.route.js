const express = require('express');
const user = express.Router();
const {authSignUp,authSignIn,getOneUser,deletedComment,deletedPost} = require('../controllers/user.controller')
const {isAuth} = require('../middlewares/isAuth')
const {SignUpValidation,SignInValidation,Validation} = require('../middlewares/validation')
const {addPost,getAllPosts,addComment,getAllComments} = require('../controllers/posts.controller')
user.post('/signup',SignUpValidation,Validation,authSignUp) 

user.post('/signin',SignInValidation,Validation,authSignIn)

user.post('/addPost',addPost)

user.get('/getAllPosts',getAllPosts)

user.post('/addComment',addComment)

user.get('/getAllComments',getAllComments)

user.post('/deletePost/:id',deletedPost)

user.get('/getOneUser',getOneUser)

user.post('/deleteComment/:id',deletedComment)

user.get('/current',isAuth,(req,res) => {
    res.send(req.user)
})

module.exports = user; 