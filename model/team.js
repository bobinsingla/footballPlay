"use strict";

var mongoose = require('mongoose');

var ObjectId = mongoose.Schema.Types.ObjectId;

var teamSchema = mongoose.Schema({
   name:{
     type: String,
     required : true
   },
   country_id: {type: ObjectId, ref: 'country'},
   //player_id: [{type: ObjectId, ref: 'player' }]
});

module.exports =  mongoose.model("team", teamSchema);
