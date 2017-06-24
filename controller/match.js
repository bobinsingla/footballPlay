"use strict";

var country = require('../model/match');

module.exports= function(app){

  var createMatch= function(matchInfo, callback){
		var newmatch = new match({
			scores= matchInfo.demo
		});


			newmatch.save(callback);
    };


	return{
		createMatch:createMatch
	};

}
