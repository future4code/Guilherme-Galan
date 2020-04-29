import {Client} from "./Client";

export class ClientManager {
    constructor(private clients: Client[] = []) {}

    getClientsQuantity(): number {
        return this.clients.length
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber : number): number{
        const foundClient = this.clients.find((client) =>{
            return client.registrationNumber === registrationNumber
        })

        if(foundClient){
            return foundClient.calculateBill()
        }

        return 0;
    }

    public calculateTotalInCome(): number{
        let total: number = 0
        this.clients.forEach((client)=> {
            total += client.calculateBill();
        })
        return total;
    }

    public deleteUser(registrationNumber: number, clients: Client[]): void{
        clients.filter(function(client) {
            return registrationNumber !== client.registrationNumber
        })

    }

}