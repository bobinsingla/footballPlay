var express    = require('express');
var bodyParser = require('body-parser');
var multer     = require('multer');
var upload     = multer();


var model      = require("./model");
var controller = require("./controller");
var routes     = require("./routes");
/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');*/
var app = express();


app.set('view engine', 'ejs');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

//Initialize the models..
model(app).init();
controller(app).init();
routes(app).init();


app.use(express.static('public'));

app.listen("8000");
