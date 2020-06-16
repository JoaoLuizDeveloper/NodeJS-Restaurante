const News = require("../../Models/News");

module.exports = {
    Index(req, res){
        News.find().then((News) => {
            res.render("Admin/Home/index", {News: News, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}