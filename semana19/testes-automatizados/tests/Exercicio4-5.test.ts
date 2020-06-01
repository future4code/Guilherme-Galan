import { Casino, LOCATION, User, verifyAge, NACIONALITY } from "../src/Exercicio3"


describe("Testing verifyAge", () => {
    // A
    test("Brazilian User Allowed in Brazil", () => {
        const casino: Casino = {
            name: 'CasinoBRA',
            location: LOCATION.BRAZIL
        }

        const arrayUsers: User[] = [
            {
                name: 'Guilherme',
                age: 20,
                nacionality: NACIONALITY.BRAZILIAN
            },
        ]

        const result = verifyAge(casino, arrayUsers);

          expect(result.brazilians.allowed.length).toBe(1)

        // EXERCICIO 5 A 

          expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)

    });

    // B
    test("American User Allowed in Brazil", () => {
        const casino: Casino = {
            name: 'CasinoBRA',
            location: LOCATION.BRAZIL
        }

        const arrayUsers: User[] = [
            {
                name: 'Guilherme A',
                age: 20,
                nacionality: NACIONALITY.AMERICAN
            },
        ]

        const result = verifyAge(casino, arrayUsers);

        expect(result.americans.allowed.length).toBe(1)

        // EXERCICIO 5 B

          expect(result.americans.unallowed.length).toBe(0)

    });

    //C
    test("2 Brazilians and 2 Americans - American Casino - 19 years", () => {
        const casino: Casino = {
            name: 'CasinoUSA',
            location: LOCATION.EUA
        }

        const arrayUsers: User[] = [
            {
                name: 'Guilherme A',
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: 'Guilherme AA',
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: 'Guilherme B',
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Guilherme BB',
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
        ]

        const result = verifyAge(casino, arrayUsers);

          expect(result.brazilians.unallowed.length).toBe(2)
        expect(result.americans.unallowed.length).toBe(2)

        // EXERCICIO 5 C

          expect(result.americans.unallowed).toContain('Guilherme A')
          expect(result.brazilians.unallowed).toContain('Guilherme B')


    });

    //D
    test("2 Brazilians - 19y, 2 Americans - 21y - American Casino", () => {
        const casino: Casino = {
            name: 'CasinoUSA',
            location: LOCATION.EUA
        }

        const arrayUsers: User[] = [
            {
                name: 'Guilherme A',
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: 'Guilherme AA',
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: 'Guilherme B',
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Guilherme BB',
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
        ]

        const result = verifyAge(casino, arrayUsers);

        expect(result.brazilians.unallowed.length).toBe(2)
        expect(result.americans.allowed.length).toBe(2)

        // EXERCICIO 5 D

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)

    })
})