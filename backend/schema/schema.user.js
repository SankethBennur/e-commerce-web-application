const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
     firstName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 20
     },
     lastName: {
          type: String,
          required: true,
          trim: true,
          min: 3,
          max: 20
     },
     username: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          index: true,
          lowercase: true,
          min: 3,
          max: 20
     },
     emailID: {
          type: String,
          required: true,
          trim: true,
          unique: true,
          lowercase: true,
          min: 3,
          max: 20
     },
     hashPassword: {
          type: String,
          required: true
     },
     contactNumber: {
          type: String
     },
     profilePicture: {
          type: String
     },
     role: {
          type: String,
          enum: ['user', 'admin', 'common'],
          default: 'common'
     }
}, {timestamps: true});


// Create a Virtual Type schema ?
userSchema.virtual('password').set(function(password){
          this.hashPassword = bcrypt.hashSync(password, 10);
});

userSchema.virtual('fullName').get(function(){
     return `${this.firstName} ${this.lastName}`;
});

userSchema.methods = {
     authenticate: function(password){  // function as a property
          return bcrypt.compareSync(password, this.hashPassword);
     }
};


module.exports = mongoose.model('User', userSchema);