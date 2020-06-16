//Dependencies
const express = require("express");

//const multer = require('multer');


//Controllers
const Home = require('../Controllers/HomeController');
const Restaurant = require('../Controllers/RestaurantController');
const Menu = require('../Controllers/MenuController');
const Contact = require('../Controllers/ContactController');
const Gallery = require('../Controllers/GalleryController');
const Reserves = require('../Controllers/ReservesController');
const News = require('../Controllers/NewsController');

//Configurações
const RoutesSite = express.Router();

//Home -> Index
RoutesSite.get("/", function (req, res) {
    res.render("Home/index");
})

//O Restaurante
RoutesSite.get("/Restaurant/", Restaurant.Index);

//Menu
RoutesSite.get("/Menu/", Menu.Index)

//Contact
RoutesSite.get("/Contact/", Contact.Index)

//Gallery
    //Videos
    RoutesSite.get("/Gallery/Videos", Gallery.Videos)

    //Pics
    RoutesSite.get("/Gallery/Pics", Gallery.Pics)

//News
RoutesSite.get("/News/", News.Index)

//Reservations
RoutesSite.get("/Reserves/", Reserves.Index)


//Learning
/*RoutesSite.get("/params/:nome/:numero", (req, res)=>{
    res.send(req.params);
    res.sendFile(__dirname + path);
    //RoutesSite.get('/posts', RestauranteController.Index);
})*/

//Erros Padrao 404
RoutesSite.get("/404", (req, res) => {
    res.send("Erro encontrado");
})

module.exports = RoutesSite