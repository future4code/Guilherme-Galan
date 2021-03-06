"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./User");
const Customer_1 = require("./Customer");
const Employee_1 = require("./Employee");
const Seller_1 = require("./Seller");
console.log("------------------------------User------------------------------");
const newUser = new User_1.User("1", "gui@gmail.com", "Guilherme", "12345");
console.log(newUser.getEmail(), newUser.getId(), newUser.getName());
console.log("------------------------------Customer------------------------------");
const newCustomer = new Customer_1.Customer("2", "gui_@gmail.com", "GuiLherme", "1234", "123.23-80");
console.log(newCustomer.getId(), newCustomer.getName(), newCustomer.getEmail(), newCustomer.getCreditCard(), newCustomer.purchaseTotal);
console.log(newCustomer.introduceYourself());
console.log("------------------------------Employee------------------------------");
const newEmployee = new Employee_1.Employee("3", "gui@hotmail.com", "Guilherme Galan", "12345678", new Date(), 4500);
console.log(newEmployee.getId(), newEmployee.getName(), newEmployee.getEmail(), newEmployee.getAdmissionDate(), newEmployee.getBaseSalary(), newEmployee.introduceYourself());
console.log(newEmployee.calculateTotalSalary());
console.log("------------------------------Seller------------------------------");
const newSeller = new Seller_1.Seller("4", "guigalan@gmail.com", "Guilherme", "12345", new Date(), 4000);
console.log(newSeller.getId());
console.log(newSeller.getName());
console.log(newSeller.getEmail());
console.log(newSeller.getBaseSalary());
console.log(newSeller.getAdmissionDate());
console.log(newSeller.calculateTotalSalary());
console.log(newSeller.introduceYourself());
newSeller.setSalesQuantity(20);
console.log(newSeller.calculateTotalSalary());
//# sourceMappingURL=index.js.map