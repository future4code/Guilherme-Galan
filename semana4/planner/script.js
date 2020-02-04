function adicionarTarefa() {
    const input = document.getElementById("nova-tarefa")
    const novaTarefa = input.value
    let dia = document.getElementById("diaDaSemana").value
    

    if (novaTarefa === "") {
        alert("Você está tentando criar uma tarefa em branco!!!")
    }else 
    
    
    
    
    if(dia === "segunda"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-segunda")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "terca"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-terca")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "quarta"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-quarta")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "quinta"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-quinta")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "sexta"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-sexta")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "sabado"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-sabado")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    }else if(dia === "domingo"){
        const listaDeTarefas = document.getElementById("conteudo-tarefa-domingo")

        listaDeTarefas.innerHTML += "<li>" + novaTarefa + "</li>"

        input.value = ""
    
    } 
}

function riscarItemLista(){

}



function apagarTarefas(){
    let lista = document.querySelector("ul")
    lista.innerHTML = ""
}











