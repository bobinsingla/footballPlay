"use strict";



module.exports = function(app){
 	var init = function(){
 		player.viewPlayer();
	};

	var player = require('./player')(app);
	var registration = require('./registration')(app);
	var country = require('./country')(app);
	var team = require('./team')(app);

 	return {
 		init: init,
 		player: player,
 		registration: registration,
 		country: country,
 		team: team 
 	};
};