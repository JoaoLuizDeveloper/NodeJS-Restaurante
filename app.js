//Dependencies
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//Call routes
const RoutesSite = require("./Routes/RoutesSite");
const RoutesAdmin = require("./Routes/RoutesAdmin");
//Configs
    //Template Engine
    app.engine('handlebars', handlebars({ defaultLayout: 'layout'}));
    app.set('view engine', 'handlebars');
    //  Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/RestauranteDB", {
        useMongoClient:true
    }).then(()=>{
        console.log("mongoDb is connected");
    }).catch((err)=>{
         console.log("Issue to connect over MongoDB: "+ err);
    });
    // Body Parser
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    //Public
    app.use(express.static(path.join(__dirname,  "wwwroot")))
    //app.use(cors());
    //app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));

// Define Models in Routes
//Routes Site
app.use(RoutesSite);
app.use(RoutesAdmin);

//Server
app.listen(5555, function(){
    console.log("Server Running na url http://127.0.0.1:5555/");
});