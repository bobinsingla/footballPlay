"use strict";

var mongoose = require('mongoose');

var matchSchema = mongoose.Schema({
   score: Number
});

module.exports =  mongoose.model("match", matchSchema);
