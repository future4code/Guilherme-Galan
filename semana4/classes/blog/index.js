class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo


        this.newPost= () =>{
            document.getElementById("titulo").value = titulo
            document.getElementById("autor").value = autor
            document.getElementById("conteudo").value = conteudo

            let post = (this.titulo, this.autor, this.conteudo)

            console.log(post)

        }
    }
}
