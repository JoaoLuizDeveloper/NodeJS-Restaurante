const Contact = require("../Models/Contact");

module.exports = {
    Index(req, res){
        Contact.find().then((Contacts) => {
            res.render("Restaurant/index", {Contacts: Contacts})
            //res.render("site/postagens/index", {postagens: postagens, layout:false}) Desabilitar Layout padrão
        }).catch((err)=>{
            req.flash("error_msg", "Houve um erro ao exibir a pagina inicial")
            res.redirect("/404")
        })
    },
    
    // Show (req, res){
    //     Postagem.findOne({_id: req.params.id}).populate("Categoria").then((postagem) => {
    //         if(postagem)
    //         {
    //             res.render("admin/postagem/detailpostagem", {postagem: postagem, layout: 'mainAdmin'})    
    //         }
    //         else
    //         {
    //             req.flash("error_msg", "Houve um erro ao exibir a pagina detalhes")
    //             res.redirect("/404")
    //         }
            
    //     }).catch((err)=> {
    //         req.flash("error_msg", "Houve um erro ao exibir a pagina detalhes")
    //         res.redirect("/404")
    //     })
    // },

    // New (req, res){
    //      Categoria.find().then((categorias)=>{                
    //         res.render("admin/postagem/addpostagem",{categorias: categorias, layout: 'mainAdmin'})
    //     }).catch((err)=>{
    //         req.flash("error_msg", "Erro ao abrir a pagina")
    //         res.redirect("/admin")
    //     });
        
    // },

    // Store(req, res) {
    //     const { filename } = req.file;
    //     var erros = []
        
    //     if(req.body.categoria == "0")
    //     {
    //         erros.push({texto: "Categoria Invalida"})
    //     }
    //     //Validação de Formularios (Basico Procurar melhor Forma Depois)
    //     if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null)
    //     {
    //         erros.push({texto: "Nome Invalido"})
    //     }
    
    //     if(req.body.titulo.length < 3)
    //     {
    //         erros.push({texto: "Adicione mais Caracteres ao Nome da postagem"})
    //     }
        
    //     if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null)
    //     {
    //         erros.push({texto: "Slug Invalido"})
    //     }
    
    //     if(erros.length > 0)
    //     {
    //         res.render("admin/postagem/addpostagem", {erros: erros, layout: 'mainAdmin'})
    //     }
        
    //     else{
    //         const novaPostagem = {
    //             Titulo: req.body.titulo,
    //             Slug: req.body.slug,
    //             Descricao: req.body.descricao,
    //             Conteudo: req.body.conteudo,
    //             thumbnail: filename,
    //             Categoria: req.body.categoria
    //         }
        
    //         new Postagem(novaPostagem).save().then(()=> {
    //             req.flash("success_msg", "Postagem Criada com sucesso")
    //             res.redirect("/admin/posts")
    //         }).catch(()=>{
    //             req.flash("error_msg", "Erros ao Criar Postagem")
    //             res.redirect("/admin/addpostagem")
    //         })
    //     }
    // },

    //  Edit(req, res){
    //      Postagem.findOne({_id: req.params.id}).populate("Categoria").then((postagem) => {
    //         Categoria.find().then((categorias) => {
    //             res.render("admin/postagem/editpostagem", {categorias: categorias, postagem: postagem, layout: 'mainAdmin'})    
    //         }).catch((err) => {
    //             req.flash("error_msg", "Erro ao abrir a Postagem")
    //             res.redirect("/admin/posts")
    //         })
    //     }).catch((err) => {
    //         req.flash("error_msg", "Postagem Inexistente")
    //         res.redirect("/admin/posts")
    //     })
    // },

    // Update(req, res){
    //     if(req.file){
    //         var { filename } = req.file;
    //     }
    //     else{
    //         var filename = req.body.thumb;
    //     }
        
    //     var erros = []
        
        
    //     //Validação de Formularios (Basico Procurar melhor Forma Depois)
    //     if(!req.body.titulo || typeof req.body.titulo == undefined || req.body.titulo == null)
    //     {
    //         erros.push({texto: "Nome Invalido"})
    //     }
    
    //     if(req.body.titulo.length < 3)
    //     {
    //         erros.push({texto: "Adicione mais Caracteres ao Nome da postagem"})
    //     }
        
    //     if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null)
    //     {
    //         erros.push({texto: "Slug Invalido"})
    //     }
    
    //     if(erros.length > 0)
    //     {
    //         res.render("admin/postagem/addpostagem", {erros: erros, layout: 'mainAdmin'})
    //     }
    //     else{
    //          Postagem.findOne({_id: req.body.id}).then((postagem)=> {
    //             postagem.Titulo = req.body.titulo,
    //             postagem.Slug = req.body.slug,
    //             postagem.Categoria = req.body.categoria,
    //             postagem.thumbnail = filename,
    //             postagem.Descricao = req.body.descricao,
    //             postagem.Conteudo = req.body.conteudo
    //             postagem.save().then(() => {
    //                 req.flash("success_msg", "Postagem Editada com sucesso")
    //                 res.redirect("/admin/posts")
    //             }).catch((err) => {
    //                 req.flash("error_msg", "Erro ao editar a Postagem")
    //                 res.redirect("/admin/posts")
    //             })
                
    //         }).catch((err) => {
    //             req.flash("error_msg", "Erro ao editar a Postagem")
    //             res.redirect("/admin/posts")
    //         })
    //     }   
    // },

    //  Destroy(req, res){
    //      Postagem.deleteOne({_id: req.params.id})
    //     .then(function(){
    //         req.flash("success_msg", "Postagem Deletada com sucesso")
    //         res.redirect("/admin/posts")
    //         .catch(function(erro){
    //             req.flash("error_msg", "Postagem não deletada")
    //             res.redirect("/admin/posts")
    //         })
    // })
    // },

    //  Find(req, res){
    //      Postagem.find({ 'Titulo': { '$regex': req.body.find, '$options' : 'i' } }).sort({Data: 'desc'}).then((postagens)=>{
    //         res.render("admin/postagem/postagens", {postagens: postagens, layout: 'mainAdmin'})
    //     }).catch((err)=>{
    //         req.flash("error_msg", "Houve um erro ao listar as postagens"+err)
    //         res.redirect("/admin")
    //     })
    // }
};