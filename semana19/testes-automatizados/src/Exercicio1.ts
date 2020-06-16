export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            name: user.name,
            balance: user.balance - value
        }
    } else {
        return undefined;
    }
}



interface User {
    name: string,
    balance: number
}