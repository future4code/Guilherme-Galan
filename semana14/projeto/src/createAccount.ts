import {account} from './types'

const accountGuilherme: account = {
    nome: "Guilherme",
    cpf: "422.000.628-01",
    dataDeNascimento: "02/01/1992"
}

function createAccount(account : account): void{
    const fs = require('fs');
    const data = account;
    console.log(data)
    const fileName = "accounts.json";

    try{
        fs.appendFileSync(fileName, JSON.stringify(data), 'utf8')
        console.log("Conta Criada com Sucesso!")
    }catch(err){
        console.log(err)
    }
}

createAccount(accountGuilherme)