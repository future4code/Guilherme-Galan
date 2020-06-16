import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getUserById", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test('Should return "User not found!" for a non-existent user', async () => {
        expect.assertions(2)

        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById }

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getUserById("13333");
        } catch (err) {            
            expect(err.errorCode).toBe(404);
            expect(err.message).toBe("User not found!");
        }

    });

    test('Should Success', async () => {
        const getUserById = jest.fn(
            (id: string) =>
            new User(
                "id",
                "Guilherme",
                "gui@gmail.com",
                "hashPassword",
                stringToUserRole("NORMAL")
            )
        );

        userDatabase = { getUserById };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getUserById("id");

        expect(getUserById).toHaveBeenCalledWith("id");
        expect(user).toEqual({
            id: "id",
            name: "Guilherme",
            email: "gui@gmail.com",
            role: UserRole.NORMAL,
          });
    })
})