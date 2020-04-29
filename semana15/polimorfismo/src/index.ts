/*
Exercício 1

A - Consegui imprimir todas as propriedades, pois as propriedades estão dentro de um objeto que segue o padrão de uma
interface.

------------------------------------------------------------------------------------------------------------------------

Exercício 2

A - Cannot create an instance of an abstract class

B - Teríamos que criar uma classe que extenda Place, herdando todos os seus atributos e métodos

------------------------------------------------------------------------------------------------------------------------

Exercício 4

A - A classe ResidentialClient possui todos os atributos e métodos das classes Residence e Client, pois ResidentClient
extends Residence e Implements Client

------------------------------------------------------------------------------------------------------------------------

Exercício 5

A - Ambas as classes CommercialClient e ResidentialClient implementam a interface Client, então ambas vão ter os atributos
e métodos de Client.

B - CommercialClient é filha de Commerce e vai ter atributos e métodos de Commerce e ResidentialClient é filha de Residence
e vai ter atributos e métodos de Residence

------------------------------------------------------------------------------------------------------------------------

Exercicio 6

A - IndustrialClient deve ser filha de Industry pois a classe Industry representa um cliente industrial

B - IndustrailClient implementa a interface Client, pois ela é um cliente e deve possuir um registro como tal

C - Não entendi mto bem essa pergunta, o que mais eu criaria além dos getters, essa classe não tem necessidade de setters
*/


import {Client} from "./Client";
import {Residence} from "./Residence";
import {Industry} from "./Industry";
import {Commerce} from "./Commerce";



const newClient: Client = {
    name: "Guilherme",
    registrationNumber: 92,
    consumedEnergy: 150,

    calculateBill: () => {
        return 2
    }
}

console.log(newClient.name, newClient.registrationNumber, newClient.consumedEnergy, newClient.calculateBill())

console.log("--------------------------------------------------------------------------------------------------------")

const newResidence = new Residence(3, "04165-000")
console.log(newResidence.getCep())

const newIndustry = new Industry(5, "12345-678")
console.log(newIndustry.getCep())

const newCommerce = new Commerce(2, "87654-321")
console.log(newCommerce.getCep())


