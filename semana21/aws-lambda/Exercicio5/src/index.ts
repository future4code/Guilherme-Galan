import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export async function handler(event: any){
    const connection = knex({
        client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            });

            if(!event.nome || !event.nome_desenho || !event.img){
                throw new Error("Missing Input!")
            } 

            await connection()
            .insert({
                nome: event.nome,
                nome_desenho: event.nome_desenho,
                img: event.img
            })
            .into("PersonagemDesenho")

            return "Personagem Criado com Sucesso!"   
}