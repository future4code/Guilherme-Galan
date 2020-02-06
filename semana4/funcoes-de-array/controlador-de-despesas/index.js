class Despesa {
    constructor(valor, tipo, descricao) {
        this.valor = valor
        this.tipo = tipo
        this.descricao = descricao
    }
}

let arrayDespesas = []

function novaDespesa() {
    let valor = document.getElementById("valor").value
    let select = document.getElementById("tipo")
    var tipo = select.options[select.selectedIndex].value
    let descricao = document.getElementById("descricao").value

    if (valor === "" || tipo === "" || descricao === "") {
        alert("Preencha todos os campos!!")
    } else {

        let despesa = new Despesa(valor, tipo, descricao)

        arrayDespesas.push(despesa)
        inserirDespesaNoHtml(arrayDespesas)
        extrato(arrayDespesas)

        console.log(arrayDespesas)

        document.getElementById("valor").value = ""
        document.getElementById("tipo").value = ""
        document.getElementById("descricao").value = ""
        document.getElementById("tipo").value = ""
    }
}


function inserirDespesaNoHtml(arrayDespesas) {
    arrayDespesas.forEach((despesa, index, array) => {
        document.getElementById("extrato").innerHTML += "<p>Tipo da despesa: " + despesa.tipo + " Descrição da despesa: " + despesa.descricao + " Valor da Despesa R$ " + despesa.valor + "</p>"

    });
}

function filtrarDespesa() {
    const despesaFiltrada = arrayDespesas.filter((despesa) => {

        let select = document.getElementById("tipo-despesa")
        var tipo = select.options[select.selectedIndex].value
        let valorMinimo = document.getElementById("valor-minimo").value
        let valorMaximo = document.getElementById("valor-maximo").value


        if (despesa.tipo === tipo && despesa.valor <= valorMaximo && despesa.valor >= valorMinimo) {

            return true
        }


    })

    if (despesaFiltrada === true) {
        document.getElementById("despesas-detalhadas").innerHTML = "<p>" + despesa
    } else {
        alert("Nenhuma Despesa encontrada!!")
    }
}


function extrato(arrayDespesas) {
    arrayDespesas.forEach((despesa) => {
        document.getElementById("total").innerHTML += "Total R$ " + Number(despesa.valor)
    })

}