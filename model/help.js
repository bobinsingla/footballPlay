"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;
   
var helpSchema = mongoose.Schema({
   title: String,
   help_id: ObjectId
});

module.exports =  mongoose.model("help", helpSchema);