import {Industry} from "./Industry";
import {Client} from "./Client";

export class IndustrialClient extends Industry implements Client{
    constructor(
        private industrialRegister : number,
        machinesQuantity: number,
        cep: string,
        public name:string,
        public registrationNumber: number,
        public consumedEnergy: number
    ) {
        super(machinesQuantity, cep);

    }

    getMachinesQuantity(): number{
        return this.machinesQuantity
    }

    getIndustrialRegister(): number {
        return this.industrialRegister
    }

    getCep(): string {
        return this.cep;
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}