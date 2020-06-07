import { Request, Response } from 'express'
import { UsersDataBase } from "../data/UsersDataBase";
import { HashGenerator } from "../services/hashGenerator";
import { TokenGenerator } from "../services/tokenGenerator";
import { IdGenerator } from "../services/idGenerator";
import { UsersBusiness } from "../business/UsersBusiness";
import { UnauthorizedError } from '../errors/UnauthorizedError';
import { InvalidParameterError } from '../errors/InvalidParameterError';
import { NotFoundError } from '../errors/NotFoundError';

export class UsersController {
    private static UsersBusiness = new UsersBusiness(
        new UsersDataBase(),
        new HashGenerator(),
        new TokenGenerator(),
        new IdGenerator()
    );

    async signupListener(req: Request, res: Response) {
        try{
            const result = await UsersController.UsersBusiness.signupListener(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password,
                req.body.type                
            );
            res.status(200).send(result);
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }
    }

    async signupAdmin(req: Request, res: Response) {
        try{
            const token = req.headers.authorization as string;

            const userAuthenticator = new TokenGenerator().verify(token);

            if(userAuthenticator.type !== "ADMIN"){
                throw new UnauthorizedError("Access Denied")
            }

            const result = await UsersController.UsersBusiness.signupAdmin(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password                
            );
            res.status(200).send(result)
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }

    }

    async signupBand(req: Request, res: Response) {
        try{
            await UsersController.UsersBusiness.signupBand(
                req.body.name,
                req.body.email,
                req.body.nickname,
                req.body.password,
                req.body.description
            )
            res.status(200).send({message: "Banda Cadastrada com Sucesso !"})
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }
    }

    async getAllBands(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string;

            const userAuthenticator = new TokenGenerator().verify(token);

            if(userAuthenticator.type !== "ADMIN"){
                throw new UnauthorizedError("Access Denied")
            }

            const result = await UsersController.UsersBusiness.getAllBands()

            res.status(200).send(result)
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }
    }

    async login(req:Request, res: Response){
        try{
            if(!req.body.email || !req.body.password){
                throw new InvalidParameterError("Missing Input")
            }
            const userData = {
                email: req.body.email,
                password: req.body.password
            }
            const user = await new UsersDataBase().login(userData.email)
            if(!user){
                throw new NotFoundError("User Not Found")
            }
            const comparePassword = await new HashGenerator().compareHash(userData.password, user.password)
            if (!comparePassword) {
                throw new Error("Invalid Password")
              }

              const accessToken = new TokenGenerator().generate({id: user.id, type: user.type})

            res.status(200).send({ access_token: accessToken })
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }
    }

    async approveBand(req: Request, res: Response){
        try{
            const isAdmin = new TokenGenerator().verify(req.headers.authorization as string)
            if(isAdmin.type !== "ADMIN"){
                throw new UnauthorizedError('Acces Denied!')
            }

            const idBand = req.body.id

            await UsersController.UsersBusiness.approveBand(idBand)

            res.status(200).send()
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            UsersDataBase.destroyConnection();
        }
    }
}