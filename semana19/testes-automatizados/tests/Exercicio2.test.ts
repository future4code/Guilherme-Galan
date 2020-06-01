import { performPurchase } from "../src/Exercicio1"

describe('Testing perfomPurchase function', () => {
    // A 
    test('Should return a new user with balance updated', () => {
        const user = {
            name: 'Guilherme',
            balance: 1000
        }

        const result = performPurchase(user, 500);

        expect(result).toEqual({
            name: 'Guilherme',
            balance: 500
        });

        expect(result.balance).toBe(500);
    })
    // B
    test('Should return a new user with balance === 0', () => {
        const user = {
            name: 'Guilherme',
            balance: 1000
        }

        const result = performPurchase(user, 1000);

        expect(result.balance).toBe(0);


        expect(result).toEqual({
            name: 'Guilherme',
            balance: 0
        });
    })

    // C
    test('Should return undefined', () => {
        const user = {
            name: 'Guilherme',
            balance: 1000
        }

        const result = performPurchase(user, 1200);

        expect(result).toEqual(undefined);
    })


})