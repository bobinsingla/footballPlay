"use strict";

var mongoose = require('mongoose');
   
var registrationSchema = mongoose.Schema({
   name:{ 
   	type: String,
   	required : true
   },

   email:{
   	type: String,
   	required : true,
   	lowercase:true
   },

   dob:{
    type: Date,
    required: true
   }, 

   password: String
});

module.exports = mongoose.model('registration', registrationSchema);