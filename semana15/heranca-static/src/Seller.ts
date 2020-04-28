import {Employee} from "./Employee";


export class Seller extends  Employee{
    static SELLING_COMMISSION: number = 5
    private salesQuantity : number = 0
    private salesAmount:number = 10

    public setSalesQuantity(value: number):number {
        return this.salesQuantity + value
    }

    public calculateTotalSalary(): number{
        return (this.baseSalary + 400) + (Seller.SELLING_COMMISSION * this.salesAmount)
    }
}