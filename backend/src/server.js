const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const mongodbURL = `mongodb+srv://admin:admin@e-commerce-db-cluster.jwxzb.mongodb.net/e-commerce-db?retryWrites=true&w=majority`;
mongoose.connect(mongodbURL, {});
mongoose.connection.once('open', () => {
     console.log(`Connection to MongoDB is successful!`);
});


// Fetching all routes in our website
const userRoutes = require('../routes/user.js');
app.use('/user', userRoutes);
const adminRoutes = require('../routes/admin.user.js');
app.use('/admin', adminRoutes);


// HTTP Requests
app.get('/', (req,res) => {
     res.status(200).json(
          {
               message: "Hell World."
          }
     )
});

app.post('/testmsg', (req, res) => {
     res.status(201).json(
          {
               "message": req.body
          }
     )
});


// Create Listen Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
     console.log(`Listening on port: ${port}`);
});