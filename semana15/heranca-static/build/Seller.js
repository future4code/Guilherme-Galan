"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class Seller extends Employee_1.Employee {
    constructor() {
        super(...arguments);
        this.salesQuantity = 0;
        this.salesAmount = 10;
    }
    setSalesQuantity(value) {
        return this.salesQuantity + value;
    }
    calculateTotalSalary() {
        return (this.baseSalary + 400) + (Seller.SELLING_COMMISSION * this.salesAmount);
    }
}
exports.Seller = Seller;
Seller.SELLING_COMMISSION = 5;
//# sourceMappingURL=Seller.js.map