"use strict";

var registration = require("../model/registration");
var Token= require("../model/accessToken");
var bcrypt = require('bcrypt');
var uuidv4 = require('uuid/v4');
module.exports = function(app){

   /**
    * Register and save it to database
    * @param  {[type]}   player   [description]
    * @param  {Function} callback [description]
    * @return {[type]}            [description]
    */

    //const saltRounds = 10;
    var createRegistration = function(registrationInfo, callback){
      if(registration.findOne({email:registrationInfo.email })){
        var error = new Error("This email already exist");
        callback(error, null);
      }else if(!registrationInfo.name || !registrationInfo.email || !registrationInfo.dob || !registrationInfo.password){
         var error = new Error("Person name is required");
         callback(error, null);
       }else{
        bcrypt.hash(registrationInfo.password, 10, function(err, hash){
          var password = hash;
          if(err){
            console.error(err.toString());
            }else{
              console.log(hash);
              var newregistration = new registration({
                name: registrationInfo.name,
                email: registrationInfo.email,
                dob: registrationInfo.dob,
                password: password
               });

               newregistration.save(callback);
             }
            });
          }
        };




          var login= function(LoginData, callback){
            registration.findOne({email:LoginData.email }, 'password _id', function (err, login) {
              if(err){
                console.error(err.buf.toString());
                var error = new Error("Please check your email and password");
                callback(error, null);
              }else{
                var hash= login.password;
                var pass= LoginData.password;
                bcrypt.compare(pass, hash, function(err, res){
                  if(err){
                    console.error(err.toString());
                    var error = new Error("Please check your email and password");
                      callback(error, null);
                  }else if(res==false){
                    console.log("false");
                    var error = new Error("Please check your email and password");
                      callback(error, null);
                     //res.status(401).location('/login').end();
                  }
                  else{
                    console.log("true");
                    var uuid = uuidv4();
                    console.log(uuid);
                    var accessToken = new Token({
                      createdOn: new Date(),
                      userId: login._id,
                      _id: uuid
                    })
                    accessToken.save(callback);
                  }
                });
              }
            })
          }


   return {
      createRegistration: createRegistration,
      login:login
   };

};
