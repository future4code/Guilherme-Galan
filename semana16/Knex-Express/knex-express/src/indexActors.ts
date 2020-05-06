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

const searchActorByName = async(name: string): Promise<any> => {
    const result = await connection.raw(
        `SELECT * FROM Actor WHERE name = "${name}" `
    );
    return result;
};

const countActorsByGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(
        `SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`
    const resultCount = result[0]
    return resultCount;
)
};

const updateSalary = async(id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id" , id)
};

const deleteActor = async(id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id)
};

const avgSalaryByGender = async(gender: string): Promise<any> =>{
    const result = await connection("Actor")
        .avg("salary as average")
        .where({gender})

    return result[0].average
};
(async () => {
    console.log(await avgSalaryByGender("male"));
})();

app.get("/actor", async(req: Request, res: Response) => {
    try{
        const actorsByGender = await countActorsByGender(req.query.gender as string);
        res.status(200).send({
            result: actorsByGender
        })

    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }
});

app.post("/actor", async(req: Request, res: Response)=>{
    try{
        await updateSalary(req.body.id, req.body.salary);
        res.status(200).send({
            message: "Salário Atualizado"
        })
    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }
});

app.delete("/actor/:id", async(req: Request, res: Response) => {
    try {
        await deleteActor(req.params.id)
        res.status(200).send({
            message: "Ator Deletado"
        })
    }catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});