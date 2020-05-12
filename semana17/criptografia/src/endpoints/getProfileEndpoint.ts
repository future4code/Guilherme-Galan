import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { JwtAuthenticator } from "../services/JwtAuthenticator";
import { BaseDatabase } from "../data/BaseDatabase";

export const getProfileEndpoint = async(req: Request, res: Response) => {
    try{
      const token = req.headers.authorization as string;
  
      const authenticator = new JwtAuthenticator()
      const userAuthentication = authenticator.verify(token)
  
      if(userAuthentication.role !== "normal"){
        throw new Error("Unauthorized")
      }
  
      const userDatabase = new UserDatabase
      const user = await userDatabase.getUserById(userAuthentication.id)
  
      res.status(200).send({
        id: user.id,
        email: user.email 
      })
  
    }catch(err){
      res.status(400).send({
        message: err.message
      })
    }finally{
      await BaseDatabase.destroyConnection();
    }
  };