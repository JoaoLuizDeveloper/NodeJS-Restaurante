const Reserves = require("../Models/Reserves");

module.exports = {
    Index(req, res){
        Reserves.find().then((Reserves) => {
            res.render("Reserves/index", {Reserves: Reserves})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}