const User = require("../../Models/Users");
const Restaurant = require("../../Models/Restaurants");

module.exports = {
    Index(req, res){
        Restaurant.find().then((Restaurants) => {
            res.render("Admin/Home/index", {Restaurants: Restaurants, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}