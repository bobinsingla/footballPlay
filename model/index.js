"use strict";
var mongoose 	  = require('mongoose');
var player        = require('./player');
var registration = require('./registration');
var country       = require('./country');
var team          = require('./team');
var help          = require('./help');

module.exports = function(app){
	//Contructor
	var init = function(){
		mongoose.connect('mongodb://localhost/my_db');
	};


	return {
		init: init
	};
};