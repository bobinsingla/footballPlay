"use strict";

module.exports = function(app){
	var controller = require("../controller")(app);
	var init = function(){
		routes();
	};

	var routes= function(){


		app.use(function (req, res, next) {
			var token = req.headers.authorization;
			if(!token){
				console.log("no token");
						next();
				}else{
					var pattern= /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
					var match = pattern.exec(token);
				  console.log(token);
					console.log(match[0]);
					var token_id = match[0];
					var Token= require("../model/accessToken");
					Token.findOne({ '_id': token_id }).
					populate('userId').
					 exec(function (err, Token) {
							if(err){
								console.error(err.toString());
							}else{
									console.log(Token.userId);
									console.log(Token.userId.email);
							}
				  next();
				});
			}
		});

    app.get('/registration', function(req, res){
   			res.render('registration' );
		});


		app.post('/registration', function(req, res){
      		var registrationInfo = req.body; //Get the parsed information

          if(registrationInfo.password===registrationInfo.confirmpassword){

            controller.registration.createRegistration(registrationInfo, function(error, registration){
              if(error){
                //TODO: Show error message
               res.render('show_message', {
                     message: "Sorry, you provided wrong info", type: "error"});
              }else{
                res.render('show_message', {
                    message: "New person added", type: "success", registration: registrationInfo});
               }
             });
           	}else{
            console.log("error");
           }
      	});


    app.get('/login',function(req,res){
      res.render('login');
    });

    app.post('/login', function(req,res){
      var LoginData = req.body;

      controller.registration.login(LoginData, function(error, login){
        if(error){
          console.error(error.toString());
        }else{
          //console.log(login._id);
          var loginId = login._id;
          var JSONObj = {loginId};
          res.render('authorization',{JSONObj: JSONObj});
         }
      });
    });

		app.get('/authentication',function(req,res){
			res.render('login');
		});


		app.post('/authentication', function(req, res){
			var authentication= req.body;
			console.log(authentication.token);
		})



    app.get('/country', function(req, res){
      res.render('country');
    });


    app.post('/country', function(req,res){
      var countryInfo = req.body;
			//console.log(req.body);
			//console.log(req.headers);
      controller.country.createCountry(countryInfo,function(error,country){
        if(error){
          res.render('show_message',{
               message:"Sorry",type:"error"});
        	}else{
          	res.render('show_message', {
                message:"Done", type : "success", country: countryInfo})
              }
          });
       });




		app.get('/player', function(req, res){
  			 res.render('player');
		});


		/**
		 * Creates a player
		 * @param  {[type]} req [description]
		 * @param  {[type]} res [description]
		 * @return {[type]}     [description]
		 */
		app.post('/player', function(req, res){
      		var playerInfo = req.body; //Get the parsed information
      		controller.player.createPlayer(playerInfo, function(error, player){
      			if(error){
      				//TODO: Show error message
      				res.render('show_message', {
            				message: "Sorry, you provided wrong info", type: "error"});
      			}else{


          			res.render('show_message', {
               			message: "New person added", type: "success", player: playerInfo});

      			}
      		});
      	});




        app.get('/team',function(req , res){
          controller.player.viewPlayer({}, 0, 10, function(err, playerList){
             if(err){
                        console.error(err);
             }else{
                controller.country.viewCountry({},0,10, function(err, countryList){
                  if(err){
                            console.error(err);
                  }else{
                        res.render('team', {playerList: playerList, countryList: countryList});

                  }

                });
             }
          });
     });


      app.post('/team', function(req, res){
          var teamName = req.body.name;
          var country_id = req.body.country;
          var players_id = [req.body.player];
					console.log(players_id);
          controller.team.createTeam({name:teamName, country: country_id}, function(error, team){
            if(error){
              //TODO: Show error message
              res.render('show_message', {
                    message: "Sorry, you provided wrong info", type: "error"});
            }else{
                /*res.render('show_message', {
                    message: "New person added", type: "success", team: teamInfo});*/
							for(var i=0; i<players_id.length ; i++){
									var p_id = players_id[i];
              		var where = {_id: { $in: p_id }};
              		var update = {team_id: team._id };
              		controller.player.updateAllPlayer(where, update, function(err, playerList){
                  if(err){
                    console.error(err.toString());
                  }else{
                    console.log(playerList);
                  //  res.render('show_message', {
                  // message: "New person added", type: "success", team: team});
                  }
              });
						 }
            }
          });
        });


      app.get('/home',function(req,res){
       controller.player.viewPlayer({},0,10, function(err, playerList){
          if(err){
            console.error(err);
          }else{
              controller.country.viewCountry({},0,10, function(err, countryList){
                if(err){
                  console.error(err);
                }else{
                  controller.team.viewTeam({},0,10, function(err, teamList){
                    if(err){
                      console.error(err);
                    }else{
                      res.render('home', {teamList: teamList,countryList: countryList,playerList: playerList})
                    }
                  });
                }
              });
            }
         });
      });

      app.get('/playerview',function(req, res){
        controller.player.viewPlayer({},0,10, function(err, playerList){
	          if(err){
	            console.error(err);
	          }else{
	            res.render('playerview', {playerList: playerList})
          }
        });
      });

      app.get('/countryview',function(req, res){
        controller.country.viewCountry({},0,10, function(err, countryList){
          if(err){
            console.error(err);
          }else{
            res.render('countryview', {countryList: countryList})
          }
        });
      });


      app.get('/teamview',function(req, res){
        controller.team.viewTeam({},0,10, function(err, teamList){
          if(err){
            console.error(err);
          }else{
            res.render('teamview', {teamList: teamList})
          }
        });
      });
  }



	return {
		init: init
	}
};
