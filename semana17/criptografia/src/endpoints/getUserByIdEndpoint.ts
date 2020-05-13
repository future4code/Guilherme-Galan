import { BaseDatabase } from '../data/BaseDatabase';
import { JwtAuthenticator } from '../services/JwtAuthenticator';
import {Request , Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';

export const getUserByIdEndpoint = async (req: Request, res: Response) => {
    try{

        const token = req.headers.authorization as string;
  
        const authenticator = new JwtAuthenticator()
        authenticator.verify(token)

        const userId = req.params.id

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(userId)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role
        })

    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }finally{
        await BaseDatabase.destroyConnection();
    }

}