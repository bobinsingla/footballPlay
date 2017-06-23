  "use strict";

  var player = require("../model/player");

  module.exports = function(app){

var viewPlayer  = function(filter, skip, limit, callback){
      filter  = filter || {};
      limit   = limit || 10;
      skip    = skip || 0;
      
      player.find(filter).limit(limit).skip(skip).exec(callback);
  }
     /**
      * create a player and save it to database
      * @param  {[type]}   player   [description]
      * @param  {Function} callback [description]
      * @return {[type]}            [description]
      */
     var createPlayer = function(playerInfo, callback){         
     
        if(!playerInfo.pname || !playerInfo.country  || !playerInfo.jnum || !playerInfo.position){
           var error = new Error("Player name is required");
           callback(error, null);
        } else {

          //player.find({}).limit(10).exec(function(error, app.delete(path, callback)player))
           

           var newplayer = new player({
              pname: playerInfo.pname,
              country: playerInfo.country,
              jnum: playerInfo.jnum,
              position: playerInfo.position
           });
           
           newplayer.save(callback);
         }
       };



      var updateAllPlayer = function(where, update, callback){

        player.update(where, { $set: update}, callback);

      }


     return {
        createPlayer: createPlayer,
        viewPlayer: viewPlayer,
        updateAllPlayer: updateAllPlayer
     };

  };