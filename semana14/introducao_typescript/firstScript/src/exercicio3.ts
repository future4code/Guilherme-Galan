type post = {
    autor: string
    texto: string
}
const post1: post = {
    autor:"Guilherme 1",
    texto:"Oi, eu sou o texto 1 "
}
const post2: post = {
    autor:"Guilherme 2",
    texto:"Oi, eu sou o texto 2 "
}
const post3: post = {
    autor:"Guilherme 3",
    texto:"Oi, eu sou o texto 3 "
}
const post4: post = {
    autor:"Guilherme 4",
    texto:"Oi, eu sou o texto 4 "
}
const post5: post = {
    autor:"Guilherme 5",
    texto:"Oi, eu sou o texto 5 "
}

const arrayPosts: post[] = [post1,post2,post3,post4,post5]

function filterPosts(array: post[], autor: string): post[]{
    let postFiltrado = array.filter(post => {
        return  post.autor === autor
    })
    return postFiltrado
}

console.log(filterPosts(arrayPosts,"Guilherme 1"))
