import { UsersDataBase } from "../data/UsersDataBase";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { UserType } from "../model/User";
import { InvalidParameterError } from "../errors/InvalidParameterError";

export class UsersBusiness {
    constructor(
        private usersDataBase: UsersDataBase,
        private hashGenerator: HashGenerator,
        private tokenGenerator: TokenGenerator,
        private idGenerator: IdGenerator
    ){}

    public async signupListener(        
        name: string,
        email: string,
        nickname: string,
        password: string,
        type: UserType
    ){
        if(!name || !email || !password || !type || !nickname){
            throw new InvalidParameterError("Missing Input");
        }

        if(password.length < 6) {
            throw new InvalidParameterError("Invalid Password");
        }

        const id = this.idGenerator.generate();
        const hashPassword = await this.hashGenerator.hash(password);

        await this.usersDataBase.signupListener(
            id, name, email, nickname, hashPassword, type
        )

        const accessToken = this.tokenGenerator.generate({ id, type });

        return { accessToken }
    }

    public async signupAdmin(
        name: string,
        email: string,
        nickname: string,
        password: string,
        type: string = "ADMIN"       
    ){
        if(!name || !email || !password || !type || !nickname){
            throw new InvalidParameterError("Missing Input");
        }

        if(password.length < 10) {
            throw new InvalidParameterError("Invalid Password");
        }

        const id = this.idGenerator.generate();
        const hashPassword = await this.hashGenerator.hash(password);

        await this.usersDataBase.signupAdmin(
            id, name, email, nickname, hashPassword
        )

        const accessToken = this.tokenGenerator.generate({ id, type });

        return { accessToken }
    }

    public async signupBand(
        name: string,
        email: string,
        nickname: string,
        password: string,        
        description: string

    ){
        if(!name || !email || !password || !nickname || !description){
            throw new InvalidParameterError("Missing Input");
        }

        if(password.length < 6) {
            throw new InvalidParameterError("Invalid Password");
        }

        const type = "BAND";
        const id = this.idGenerator.generate();
        const hashPassword = await this.hashGenerator.hash(password);

        await this.usersDataBase.signupBand(id, name, email, nickname, hashPassword, type, description)
    }

    public async getAllBands(){
        const result = await this.usersDataBase.getAllBands()

        return result
    }

    public async approveBand(id: string){
        if(!id){
            throw new InvalidParameterError("Invalid ID")
        }

        await this.usersDataBase.approveBand(id)
    }
}