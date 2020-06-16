export type account = {
    nome : string,
    cpf: string,
    dataDeNascimento: string
}

export type transactions = {
    nome: string,
    cpf: string,
    nomeDestinatario: string,
    cpfDestinatario: string,
    valor: number
}