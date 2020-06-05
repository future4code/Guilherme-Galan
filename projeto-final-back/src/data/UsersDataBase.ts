import { BaseDataBase } from "./BaseDataBase";

export class UsersDataBase extends BaseDataBase {
    public async signupListener(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string,
        type: string
        ){
            return await super.getConnection().raw(`
                INSERT INTO ${BaseDataBase.USERS_TABLE_NAME} (id, name, email, nickname, password, type)
                VALUES('${id}', '${name}', '${email}', '${nickname}', '${password}', '${type}')
            `)
        }

    public async signupAdmin(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string,
        type: string = "ADMIN"
    ){
        return await super.getConnection().raw(`
            INSERT INTO ${BaseDataBase.USERS_TABLE_NAME} (id, name, email, nickname, password, type)
            VALUES('${id}', '${name}', '${email}', '${nickname}', '${password}', '${type}')
        `)
    }

    public async signupBand(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string,
        type: string = "BAND",
        description: string
    ){
        return await super.getConnection().raw(`
            INSERT INTO ${BaseDataBase.USERS_TABLE_NAME} (id, name, email, nickname, password, type, description)
            VALUES('${id}', '${name}', '${email}', '${nickname}', '${password}', '${type}', '${description}')
        `)
    }

    public async getAllBands(){
        const result = await super.getConnection().raw(`
            SELECT
                name,
                email,
                nickname,
                isAproved
            FROM ${BaseDataBase.USERS_TABLE_NAME} WHERE type = "BAND"            
        `)

        return result [0]
    }

    public async login(email: string): Promise <any> {
        const user = await super.getConnection().raw(`
            SELECT * FROM ${BaseDataBase.USERS_TABLE_NAME} WHERE email = '${email}'
        `)       

        return user[0][0]   
    }
}