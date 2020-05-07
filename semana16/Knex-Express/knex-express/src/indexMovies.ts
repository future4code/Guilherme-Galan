import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();
const app = express();
app.use(express.json());
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

const createFilm = async (
    id: number,
    nome:string,
    data_lancamento: Date,
    sinopse: string,
    avaliacao: number

): Promise<any> => {
    await connection.insert({
        id:id,
        nome: nome,
        data_lancamento: data_lancamento,
        sinopse: sinopse,
        avaliacao: avaliacao
    })
        .into("Filmes")
}

const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Filmes LIMIT 15
  `);

    return result[0];
};

const searchMovie = async (name: string): Promise<any[]> => {
    const result = await connection
        .select("*")
        .from("Filmes")
        .where("name", "LIKE", `%${name}%`)
    return result;
};

app.get("/movie/search", async (req: Request, res: Response) => {
    try {
        const movies = await searchMovie(req.query.query as string);

        res.status(200).send({
            movies: movies,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.get("/movie/all"), async(req: Request, res: Response)=> {
    try{
        const allMovies = await getAllMovies()
        res.status(200).send({
            alllMovies: allMovies
        })
    }catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
}

app.post("/movie", async(req:Request, res: Response)=> {
    try{
        await createFilm(5,"Teste",new Date(),"Testando criação de endpoint", 10)
        res.status(200).send({
            message: "Filme Criado!"
        })

    }catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
})