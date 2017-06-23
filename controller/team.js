"use strict";

var team = require("../model/team");

module.exports = function(app){
  

  var viewTeam  = function(filter, skip, limit, callback){
      filter  = filter || {};
      limit   = limit || 10;
      skip    = skip || 0;
      
      team.find(filter).limit(limit).skip(skip).exec(callback);
  }



   var createTeam = function(teamInfo, callback){         
   
      
         var newteam = new team({
            name: teamInfo.name,
            country_id: teamInfo.country,
            
         });
         
         newteam.save(callback);
     };


   return {
      createTeam: createTeam,
      viewTeam: viewTeam
   };

};