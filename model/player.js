"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var playerSchema = mongoose.Schema({
   pname:{
     type: String,
     required : true
   },
   country:{
     type: String,
     required : true
   },
   position:{
     type: String,
     required : true
   },
   jnum:{
     type: Number,
     required : true
   },
   team_id: {type:ObjectId, ref:'team'}
});

module.exports =  mongoose.model("player", playerSchema);
