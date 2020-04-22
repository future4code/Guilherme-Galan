const post1 = {
    autor: "Guilherme 1",
    texto: "Oi, eu sou o texto 1 "
};
const post2 = {
    autor: "Guilherme 2",
    texto: "Oi, eu sou o texto 2 "
};
const post3 = {
    autor: "Guilherme 3",
    texto: "Oi, eu sou o texto 3 "
};
const post4 = {
    autor: "Guilherme 4",
    texto: "Oi, eu sou o texto 4 "
};
const post5 = {
    autor: "Guilherme 5",
    texto: "Oi, eu sou o texto 5 "
};
const arrayPosts = [post1, post2, post3, post4, post5];
function filterPosts(array, autor) {
    let postFiltrado = array.filter(post => {
        return post.autor === autor;
    });
    return postFiltrado;
}
console.log(filterPosts(arrayPosts, "Guilherme 1"));
//# sourceMappingURL=exercicio3.js.map