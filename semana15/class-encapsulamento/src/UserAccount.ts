import {Transaction} from "./Transaction";

export class UserAccount {
    constructor(name: string, age:number, cpf: string, balance:number, transactions: []) {
        this._name = name;
        this._age = age;
        this._cpf = cpf;
        this._balance = balance;
        this._transactions = transactions;
    }

    private _balance: number;
    private _cpf: string;
    private _name: string;
    private _age: number;
    private _transactions: Transaction[]

    getBalance(name: string, cpf: string):number{
        if(name === this._name && cpf === this._cpf){
            return this._balance
        }else{
            console.log("Nome ou CPF Inválido")
        }
    }

    addBalance(name: string, cpf: string, value: number):void{
        if(name === this._name && cpf === this._cpf){
            this._balance += value
            const description = "Depósito em conta"
            const newTransaction: Transaction = new Transaction(cpf,value,description)
            this._transactions.push(newTransaction)
        }else{
            console.log("Nome ou CPF Inválido")
        }

    }
}