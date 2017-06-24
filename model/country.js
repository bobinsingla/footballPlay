"use strict";

var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
   name:{
      type: String,
      required: true
   }
});

module.exports =  mongoose.model("country", countrySchema);
