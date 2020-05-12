import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { JwtAuthenticator } from "../services/JwtAuthenticator";
import { BaseDatabase } from "../data/BaseDatabase";
import { HashManager } from "../services/HashManager";

export const loginEndpoint = async (req: Request, res: Response) => {
    try{
      const userData = {
        email: req.body.email,
        password: req.body.password
      }
  
      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserByEmail(userData.email)
  
      const hashManager = new HashManager();
      const compareHash = await hashManager.compare(userData.password, user.password)
  
      if(!compareHash){
        throw new Error("Wrong Password")
      }
  
      if(!req.body.email || req.body.email.indexOf("@") === -1){
        throw new Error("Invalid Email")
      }
  
      const authenticator = new JwtAuthenticator()
      const token = authenticator.generateToken({
        id: user.id,
        role: user.role
      })
  
      res.status(200).send({
        token: token
      })
    }catch(err){
      res.status(400).send({
        message: err.message
      })
    }finally{
      await BaseDatabase.destroyConnection();
    }
  };