import {Request, Response} from 'express';
import { BaseDataBase } from '../data/BaseDataBase';
import { IdGenerator } from '../services/IdGenerator';
import { ProductDataBase } from '../data/ProductDataBase';

export class ProductsController {
    async create(req: Request, res: Response) {
        try{
            if(!req.body.name || !req.body.price || !req.body.img){
                throw new Error("Missing Input")
            }

            const id = new IdGenerator().generate();

            await new ProductDataBase().create(
                id,
                req.body.name,
                req.body.price,
                req.body.img
            )

            res.sendStatus(200)

        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        } finally {
            await BaseDataBase.destroyConnection();
        }
    }

    async getById(req: Request, res: Response) {
        try{
            if(!req.params.id){
                throw new Error("Missing Id")
            }

            const result = await new ProductDataBase().getById(req.params.id)

            res.status(200).send(result)

        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        } finally {
            await BaseDataBase.destroyConnection();
        }
    }
}