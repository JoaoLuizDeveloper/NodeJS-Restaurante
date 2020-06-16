//Dependencies
const express = require("express");

//const multer = require('multer');

//Controllers
const Home = require('../Controllers/Admin/HomeController');
const Restaurant = require('../Controllers/Admin/RestaurantController');
const Menu = require('../Controllers/Admin/MenuController');
const Contact = require('../Controllers/Admin/ContactController');
const Gallery = require('../Controllers/Admin/GalleryController');
const Reserves = require('../Controllers/Admin/ReservesController');
const News = require('../Controllers/Admin/NewsController');

//Configurações
const Admin = express.Router();

//Usuarios
// routes.get('/usuarios/registro', UsuarioController.regNew);
//     routes.post('/usuarios/registro', upload.single('thumbnail'), UsuarioController.regStore);
//     routes.get('/usuarios/login', UsuarioController.logNew);
//     routes.post('/usuarios/login', UsuarioController.logStore);
//     routes.get('/usuarios/logout', UsuarioController.logOut);

//Home -> Index
Admin.get("/Admin", Home.Index);

// routes.get('/admin/posts', auth, adminPostagemController.Index); //Listagem
//     routes.get('/admin/post/detalhes/:id', auth, adminPostagemController.Show); //Detalhes
//     routes.get('/admin/post/new', auth, adminPostagemController.New); //Novo
//     routes.post('/admin/post/store', auth, upload.single('thumbnail'), adminPostagemController.Store); //Cadastro
//     routes.get('/admin/post/edicao/:id', auth, adminPostagemController.Edit); //View Edição
//     routes.post('/admin/post/update', auth, upload.single('thumbnail'), adminPostagemController.Update); //Update Dados
//     routes.get('/admin/post/delete/:id', auth, adminPostagemController.Destroy); //Delete Dados
//     routes.post('/admin/posts/find', auth, adminPostagemController.Find); //Buscar

//O Restaurante
Admin.get("/Admin/Restaurant/", Restaurant.Index);

//Menu
Admin.get("/Admin/Menu/", Menu.Index)

//Reserves
Admin.get("/Admin/Reserves/", Reserves.Index)

//Gallery
    //Videos
    Admin.get("/Admin/Gallery/Videos", Gallery.Videos)

    //Pics
    Admin.get("/Admin/Gallery/Pics", Gallery.Pics)

//Reserves
Admin.get("/Admin/News/", News.Index)

//Contact
Admin.get("/Admin/Contact/", Contact.Index)

//RoutesSite.get('/posts', RestauranteController.Index);

//Erros Padrao 404
Admin.get("/404", (req, res) => {
    res.send("Erro encontrado");
})

module.exports = Admin