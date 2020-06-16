const Contact = require("../../Models/Contact");

module.exports = {
    Index(req, res){
        Contact.find().then((Contacts) => {
            res.render("Admin/Home/index", {Contacts: Contacts, layout: 'layoutAdmin'})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
}