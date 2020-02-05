class Post{
    constructor(titulo, autor, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}

let postagens = []

function novoPost(){
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value
    let conteudo = document.getElementById("conteudo").value

    let post = new Post(titulo, autor, conteudo)

    postagens.push(post)

    console.log(post)
    console.log(postagens)
      
}


function adicionarPostnoHtml(array){
    


}
