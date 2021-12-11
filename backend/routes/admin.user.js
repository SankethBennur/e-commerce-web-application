const express = require('express');
const router = express.Router();
const Users = require('../schema/schema.user.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// New Admin Sign Up - Register
router.post('/signup', (req, res) => {
     // First, we validate if user already exists or not.
     Users.findOne({emailID: req.body.emailID}).exec((error, user) => {
          if(user) return res.status(400).json({  // 400: Bad Request
               message: "User already exists."
          });

          // const {
          //      firstName,
          //      lastName,
          //      emailID,
          //      password
          // } = req.body;

          // const newUser = new Users({
          //      firstName,
          //      lastName,
          //      emailID,
          //      password,
          //      username: Math.random().toString()
          // });

          const newUser = new Users({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               username: Math.random().toString(),
               emailID: req.body.emailID,
               password: req.body.password,
               role: 'admin'
          });

          newUser.save()
               .then(() => {res.json(`New User Added! Welcome! Role: ${newUser.role}`)})
               .catch(err => {res.status(400).json('Error: ' + err)});

     });
});


// User Sign in
router.post('/signin', function(req, res) {
     Users.findOne({ emailID: req.body.emailID }).exec(function(error, user){
          if(error) return res.status(404).json({message: 'User not found.'});
          if(user) {
               // if user is found (true), we must immediately authenticate password
               if(user.authenticate(req.body.password) && user.role === 'admin'){
                    // 3 steps here
                    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' }); // _id is the id assigned by mongodb
                    const { firstName, lastName, email, role, fullName } = user;
                    res.status(200).json({
                         token,
                         user: { firstName, lastName, email, role, fullName}
                    });

               }
               // if authentication was unsuccessful, Wrong Password
               else {
                    return res.status(400).json({
                         message: 'Invalid Password or not an Admin'
                    });
               };
          };
     });
});


module.exports = router;