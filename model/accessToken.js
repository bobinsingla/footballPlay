"use strict";

var mongoose= require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var tokenSchema= mongoose.Schema({
	_id:String,
	createdOn:Date,
	userId: {type:ObjectId, ref:'registration'}
});

module.exports= mongoose.model("accessToken", tokenSchema);