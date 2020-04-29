/* Exercício 1

A - Não seria possível imprimir a senha dessa instância, pois como não temos um método getPassword().

B - A mensagem "Chamando o construtor da classe User" foi impressa 1 vez.

------------------------------------------------------------------------------------------------------------------------

Exercício 2

A - A mensagem "Chamando o construtor da classe Customer" foi impressa 1 vez.

B - A mensagem "Chamando o construtor da class User" foi impressa 1 vez, pois a classe Customer herda todas as
funcionalidades e atributos da classe User, assim quando criamos um Customer o constructor do User é chamado.

------------------------------------------------------------------------------------------------------------------------

Exercício 3

A - Não seria possível imprimir a senha dessa instância, pois como não temos um método getPassword().

------------------------------------------------------------------------------------------------------------------------

Exercício 6

A - A mensagem "Chamando o construtor da classe Customer" foi impressa 1 vez.

B - Podemos imprimir as seguintes informações - Id, Name, Email, AdmissionDate, BaseSalary e caso desejarmos podemos
usar o IntroduceYourself

------------------------------------------------------------------------------------------------------------------------

Exercício 7

A - Como o constructor foi herdado da classe Employee, temos que passar todos os parâmetros que a class Employee espera,
id, email, name, password, admissionDate, baseSalary.

B - Podemos imprimir as seguintes informações - Id, Name, Email, AdmissionDate, BaseSalary, CalculateTotalSalary e caso
desejarmos podemos usar o IntroduceYourself. Como todos os outros caso não foi possível imprimir o Password, pois não
temos um getPassword(){return this.password}

------------------------------------------------------------------------------------------------------------------------

Exercício 9

A - Não é possível imprimir o valor de salesQuantity, pois não temos um método getSalesQuantity().

------------------------------------------------------------------------------------------------------------------------

Exercício 10

A - Foi impresso no terminal o valor da função que esta na class Seller, pois ela sobrescreve a função que está na class
Employee

*/

import {User} from "./User";
import {Customer} from "./Customer";
import {Employee} from "./Employee";
import {Seller} from "./Seller";


console.log("------------------------------User------------------------------")
const newUser = new User("1", "gui@gmail.com", "Guilherme", "12345")
console.log(newUser.getEmail(), newUser.getId(), newUser.getName())

console.log("------------------------------Customer------------------------------")
const newCustomer = new Customer("2", "gui_@gmail.com", "GuiLherme", "1234",
    "123.23-80")

console.log(newCustomer.getId(), newCustomer.getName(), newCustomer.getEmail(), newCustomer.getCreditCard(),
    newCustomer.purchaseTotal)
console.log(newCustomer.introduceYourself())

console.log("------------------------------Employee------------------------------")
const newEmployee = new Employee("3", "gui@hotmail.com", "Guilherme Galan", "12345678",
    new Date(), 4500)

console.log(newEmployee.getId(),newEmployee.getName(), newEmployee.getEmail(),newEmployee.getAdmissionDate(),
    newEmployee.getBaseSalary(),
    newEmployee.introduceYourself())

console.log(newEmployee.calculateTotalSalary())

console.log("------------------------------Seller------------------------------")
const newSeller = new Seller("4", "guigalan@gmail.com", "Guilherme", "12345", new Date(),
    4000)

console.log(newSeller.getId())
console.log(newSeller.getName())
console.log(newSeller.getEmail())
console.log(newSeller.getBaseSalary())
console.log(newSeller.getAdmissionDate())
console.log(newSeller.calculateTotalSalary())
console.log(newSeller.introduceYourself())

newSeller.setSalesQuantity(20)

console.log(newSeller.calculateTotalSalary())

