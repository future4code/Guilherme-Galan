import {JSONFileManager} from "./JSONFileManager";
import {UserAccount} from "./UserAccount";

export class Bank{
    constructor(accounts: [], fileManager: JSONFileManager) {
        this._accounts = accounts;
        this._fileManager = fileManager;
    }

    private _accounts : [];
    private _fileManager: JSONFileManager;

    createAccount(name: string, cpf: string, yearOfBirthday: number):void{

    }
    getAllAccounts():[]{}
    getAccountByCpf(): UserAccount{}
    saveAccounts():void{}
}