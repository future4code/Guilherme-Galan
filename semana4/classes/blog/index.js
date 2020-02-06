class Post {
    constructor(titulo, autor, conteudo, imagem) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        this.imagem = imagem
    }
}

let postagens = []

function novoPost() {
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value
    let conteudo = document.getElementById("conteudo").value
    let imagem = document.getElementById("imagem").value

    let post = new Post(titulo, autor, conteudo, imagem)

    postagens.push(post)

    adicionarPostNoHtml(titulo, autor, conteudo, imagem)
    
    console.log(postagens)

    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""
    document.getElementById("imagem").value = ""

}


function adicionarPostNoHtml(titulo, autor, conteudo, imagem) {
    document.getElementById("postagens").innerHTML += "<h2>" + titulo + "</h2>" + "Autor: " + autor + "<br>" + conteudo + "<br>" + "<img src=\"" + imagem + "\" >"

}