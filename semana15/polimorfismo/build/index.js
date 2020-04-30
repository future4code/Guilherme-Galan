"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Residence_1 = require("./Residence");
const Industry_1 = require("./Industry");
const Commerce_1 = require("./Commerce");
const newClient = {
    name: "Guilherme",
    registrationNumber: 92,
    consumedEnergy: 150,
    calculateBill: () => {
        return 2;
    }
};
console.log(newClient.name, newClient.registrationNumber, newClient.consumedEnergy, newClient.calculateBill());
console.log("--------------------------------------------------------------------------------------------------------");
const newResidence = new Residence_1.Residence(3, "04165-000");
console.log(newResidence.getCep());
const newIndustry = new Industry_1.Industry(5, "12345-678");
console.log(newIndustry.getCep());
const newCommerce = new Commerce_1.Commerce(2, "87654-321");
console.log(newCommerce.getCep());
//# sourceMappingURL=index.js.map