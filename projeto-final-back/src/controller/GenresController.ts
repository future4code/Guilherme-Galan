import { Request, Response } from 'express'
import { GenresBusiness } from "../business/GenresBusiness";
import { GenresDataBase } from "../data/GenresDataBase";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from '../services/tokenGenerator';
import { UnauthorizedError } from '../errors/UnauthorizedError';

export class GenresController {
    private static GenresBusiness = new GenresBusiness(
        new GenresDataBase(),
        new IdGenerator()
    );

    async addGenre(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string;

            const userAuthenticator = new TokenGenerator().verify(token);

            if(userAuthenticator.type !== "ADMIN"){
                throw new UnauthorizedError("Access Denied")
            }
            
            await GenresController.GenresBusiness.addGenre(req.body.name)

            res.status(200).send()
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            GenresDataBase.destroyConnection();
        }
    }

    async getAllGenres(req: Request, res: Response){
        try{
            const token = req.headers.authorization as string;

            const userAuthenticator = new TokenGenerator().verify(token);

            if(userAuthenticator.type === "ADMIN" || userAuthenticator.type === "BAND"){
                
            const result = await GenresController.GenresBusiness.getAllGenres();

            res.status(200).send({result})    
            } else {
                throw new UnauthorizedError("Access Denied")
            }
        }catch(err){
            res.status(err.errorCode || 400).send({message: err.message})
        }finally{
            GenresDataBase.destroyConnection();
        }
    }
}