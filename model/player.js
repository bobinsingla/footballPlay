"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var playerSchema = mongoose.Schema({
   pname: String,
   country: String,
   position: String,
   jnum: Number,
   team_id: {type:ObjectId, ref:'team'}
});

module.exports =  mongoose.model("player", playerSchema);