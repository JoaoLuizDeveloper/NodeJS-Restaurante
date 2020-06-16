const Midia = require("../../Models/Midia");

module.exports = {
    Videos(req, res){
        Midia.find().then((Midias) => {
            res.render("Admin/Home/index", {Midias: Midias, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
    Pics(req, res){
        Midia.find().then((Midias) => {
            res.render("Admin/Home/index", {Midias: Midias, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}