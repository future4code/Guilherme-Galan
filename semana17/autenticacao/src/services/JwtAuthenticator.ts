import * as jwt from 'jsonwebtoken';


export class JwtAuthenticator {
    private static getExpiresIn(): number{
        return Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
    }

    public generateToken(data: AuthenticationData): string{
       return jwt.sign(data, process.env.JWT_KEY as string,{
           expiresIn: JwtAuthenticator.getExpiresIn()
        });        
    }

    public verify(token: string): AuthenticationData {
        const data = jwt.verify(
            token,
            process.env.JWT_KEY as string,
        ) as any

        return {id: data.id}
    }
}

export interface AuthenticationData {
    id : string
}