
var country = require('../model/help');

module.exports = function(app){
  
   var createhelp = function(callback){         
   
      
         var newhelp = new team({
            title:String,
            help: countryObj._id 
         });
         
         newt.save(function (err, arronObj) {
               if (err) return console.error(err);

            var help = require('../model/help');
                          var help1 = new help({
                            title: "Once upon a timex.",
                            help_id: newcountryObj._id    // assign the _id from the person
                        });
                  
                        help1.save(function (err) {
                           if (err) return console.error(err);
                    // thats it!
                     });
     };


   return {
      createhelp: createhelp
   };

};