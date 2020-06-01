import { Request, Response } from "express";
import { BaseDataBase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { PostDatabase } from "../data/PostDatabase";

import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

class BaseDataBase {
   
    private static KNEX_CONNECTION: Knex | null = null;
    protected static POST_TABLE_NAME = "labook5_posts";

    protected getConnection() {
        if (BaseDataBase.KNEX_CONNECTION === null) {
            BaseDataBase.KNEX_CONNECTION = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            });
        }
        return BaseDataBase.KNEX_CONNECTION
    }

    public static async destroyConnection() {
        if (BaseDataBase.KNEX_CONNECTION !== null) {
            await BaseDataBase.KNEX_CONNECTION.destroy()
        }
        BaseDataBase.KNEX_CONNECTION = null
    }
}


export class PostController {
    async create(req: Request, res: Response) {
            const token = req.headers.authorization as string;
            const userData = await new Authenticator().verify(token);
            await new PostDatabase().newPost(req.body.picture, req.body.description, req.body.type, userData.id, Date.now())

            res.sendStatus(200)

        } catch (err) {
            res.status(400).send({
                message: err.message,
            });
        } finally {
            await BaseDataBase.destroyConnection();
        }
    }
}