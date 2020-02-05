class Post {
    constructor(titulo, autor, conteudo) {

        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
    }
}


function novoPost(){
    
    let titulo = document.getElementById("titulo").value
    let autor = document.getElementById("autor").value 
    let conteudo= document.getElementById("conteudo").value

    let post = new Post(titulo, autor, conteudo)

    console.log(post)

    

}
