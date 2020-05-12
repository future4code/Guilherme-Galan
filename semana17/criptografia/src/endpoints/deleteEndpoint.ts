import { BaseDatabase } from '../data/BaseDatabase';
import { JwtAuthenticator } from '../services/JwtAuthenticator';
import {Request , Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';


export const deleteProfileEndpoint = async(req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string;
  
      const authenticator = new JwtAuthenticator()
      const tokenData = authenticator.verify(token)

      if(tokenData.role !== "admin"){
          throw new Error("Sorry, only admins can acess this endpoint")
      }

      const userDatabase = new UserDatabase();
      await userDatabase.deleteUser(req.params.id)
        
      res.sendStatus(200)

    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }finally{
        await BaseDatabase.destroyConnection();
    }
};