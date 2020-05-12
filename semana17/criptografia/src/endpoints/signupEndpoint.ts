import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { JwtAuthenticator } from "../services/JwtAuthenticator";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";

export const signupEndpoint = async (req: Request, res: Response) => {

    try{
  
      if(!req.body.email || req.body.email.indexOf("@") === -1){
        throw new Error("Invalid Email")
      }
  
      if(req.body.password < 6){
        throw new Error("Invalid Password")
      }
  
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      }
  
      const idGenerator = new IdGenerator();
      const id = idGenerator.generateId();
  
      const hashManager = new HashManager();
      const hashPassword = await hashManager.hash(userData.password)
  
      const userDatabase = new UserDatabase()
      await userDatabase.createUser(
        id,
        userData.email,
        hashPassword,
        userData.role
      );
  
      const authenticator = new JwtAuthenticator()
      const token = authenticator.generateToken({
        id, 
        role:userData.role
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