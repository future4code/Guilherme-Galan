import { validateCharacter } from "../src";


describe("Testing validateCharacter", () => {
    test('Should return false when name has a empty string', () => {
        const result = validateCharacter({
            name: "",
            health: 1500,
            defense: 1000,
            strength: 1200
        })

        expect(result).toBe(false)
    });

    test('Should return false when health has a empty propertie', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: undefined,
            defense: 1000,
            strength: 1200
        })

        expect(result).toBe(false)
    });

    test('Should return false when defense has a empty propertie', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: 1500,
            defense: undefined,
            strength: 1200
        })

        expect(result).toBe(false)
    });

    test('Should return false when strength has a empty propertie', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: 1500,
            defense: 1000,
            strength: undefined
        })

        expect(result).toBe(false)
    });

    test('Should return false when health has a negative value', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: -1,
            defense: 1000,
            strength: 1200
        })

        expect(result).toBe(false)
    });

    test('Should return true when defense has a 0 value', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: 1500,
            defense: 0,
            strength: 1200
        })

        expect(result).toBe(true)
    });

    test('Should return true when input is valid', () => {
        const result = validateCharacter({
            name: "Goku SSJ3",
            health: 1500,
            defense: 1000,
            strength: 1200 // + de 8 mil
        })

        expect(result).toBe(true)
    });
});