export class Transaction{
    constructor(cpf: string, value: number, description: string) {
        this._cpf = cpf;
        this._value = value;
        this._description = description;
    }

    private _cpf: string;
    private _value: number;
    private _description: string;
}