import { UserBusiness } from "../../src/business/UserBusiness";
import { UserRole, User, stringToUserRole } from "../../src/model/User";

describe("Testing UserBusiness.getAllUsers", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test('Should return "Only Admin can access" if role !== ADMIN', async () => {
        expect.assertions(2);

        try{
            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getAllUsers(UserRole.NORMAL)
        }catch(err){
            expect(err.errorCode).toBe(400)
            expect(err.message).toBe('Only Admin can access')
        }
    });

    test('Should Success', async() => {
        const getAllUsers = jest.fn(() => [
            new User('id', 'Guilherme', 'gui@gmail.com', 'hashPassword', stringToUserRole('ADMIN'))
        ]);
        userDatabase = { getAllUsers };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const result = await userBusiness.getAllUsers(UserRole.ADMIN);

        expect(getAllUsers).toHaveBeenCalledTimes(1);
        expect(result).toContainEqual({
            id: 'id',
            name: 'Guilherme',
            email: 'gui@gmail.com',
            role: 'ADMIN'

        })
    })
})