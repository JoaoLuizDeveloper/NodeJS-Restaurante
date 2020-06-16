const Menu = require("../../Models/Menu");

module.exports = {
    Index(req, res){
        Menu.find().then((Menus) => {
            res.render("Admin/Home/index", {Menus: Menus, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}