"use strict";

var mongoose = require('mongoose');
   
var countrySchema = mongoose.Schema({
   name: String
});

module.exports =  mongoose.model("country", countrySchema);