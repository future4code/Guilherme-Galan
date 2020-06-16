import { Characters } from "../src/models/Characters";
import { performAttackWithDependencyInversion } from "../src";

describe("Testing performAttackWithDependencyInversion", () => {
    test("Should perform attack", () => {
        const mock = jest.fn(() => {
            return true
        });

        const attacker: Characters = {
            name: "Goku",
            health: 1500,
            defense: 800,
            strength: 1000
        };

        const defender: Characters = {
            name: "Vegeta",
            health: 1500,
            defense: 800,
            strength: 950
        };

        performAttackWithDependencyInversion(attacker, defender, mock as any);

        expect(defender.health).toBe(1300);
        expect(mock).toBeCalled();
        expect(mock).toHaveBeenCalledTimes(2);
        expect(mock).toHaveReturnedTimes(2);

    });

    test("Should return invalid character", () => {
        expect.assertions(4);

        const mock = jest.fn(() => {
            return false
        });

        const attacker: Characters = {
            name: "Goku",
            health: 1500,
            defense: 800,
            strength: 1000
        };

        const defender: Characters = {
            name: "Vegeta",
            health: 1500,
            defense: -1,
            strength: 950
        };

        try{
            performAttackWithDependencyInversion(attacker, defender, mock as any);
        }catch(err){

            expect(mock).toHaveBeenCalled();
            expect(err.message).toBe("Invalid Character");
            expect(mock).toHaveBeenCalledTimes(1);
            expect(mock).toHaveReturnedTimes(1);
        }
    });
})   