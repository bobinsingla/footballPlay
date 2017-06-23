"use strict";

var country = require('../model/country');

module.exports= function(app){


var viewCountry  = function(filter, skip, limit, callback){
      filter  = filter || {};
      limit   = limit || 10;
      skip    = skip || 0;
      
      country.find(filter).limit(limit).skip(skip).exec(callback);
  }



	var createCountry= function(countryInfo, callback){
		var newcountry = new country({
			name:countryInfo.name
		});
	

			newcountry.save(callback);
    }; 


	return{
		createCountry:createCountry,
    	viewCountry:viewCountry
	};

}