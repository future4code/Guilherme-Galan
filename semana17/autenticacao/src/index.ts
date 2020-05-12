import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { JwtAuthenticator } from "./services/JwtAuthenticator";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.post("/signup", async (req: Request, res: Response) => {

  try{

    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invalid Email")
    }

    if(req.body.password < 6){
      throw new Error("Invalid Password")
    }


    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const userDatabase = new UserDatabase()
    await userDatabase.createUser(
      id,
      userData.email,
      userData.password
    );

    const authenticator = new JwtAuthenticator()
    const token = authenticator.generateToken({id})
    

    res.status(200).send({
      token: token
    })

  }catch(err){
    res.status(400).send({
      message: err.message
    })
  }
})

app.post("/login", async (req: Request, res: Response) => {
  try{
    const userData = {
      email: req.body.email,
      password: req.body.password
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserByEmail(userData.email)

    if(user.password !== userData.password){
      throw new Error("Invalid Password")
    }

    if(!req.body.email || req.body.email.indexOf("@") === -1){
      throw new Error("Invalid Email")
    }

    const authenticator = new JwtAuthenticator()
    const token = authenticator.generateToken({id: user.id})

    res.status(200).send({
      token: token
    })
  }catch(err){
    res.status(400).send({
      message: err.message
    })
  }
})

app.get("/user/profile", async(req: Request, res: Response) => {
  try{
    const token = req.headers.authorization as string;

    const authenticator = new JwtAuthenticator()
    const userAuthentication = authenticator.verify(token)

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
  }
})


/* Criação de Id / Token / Usuário - Testes


console.log(id)

const newUser = new UserDatabase()
newUser.createUser(id,"gui_galan@hotmail.com", "123456")

const authenticator = new JwtAuthenticator()
const token = authenticator.generateToken({id})
console.log(token) */