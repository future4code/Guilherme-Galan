"use strict";
exports.__esModule = true;
var accountGuilherme = {
    nome: "Guilherme Galan",
    cpf: "422.000.628-01",
    dataDeNascimento: "02/01/1992"
};
function createAccount(account) {
    var fs = require('fs');
    var data = account;
    console.log(data);
    var fileName = "accounts.json";
    try {
        fs.appendFileSync(fileName, JSON.stringify(data), 'utf8');
        console.log("Conta Criada com Sucesso!");
    }
    catch (err) {
        console.log(err);
    }
}
createAccount(accountGuilherme);
