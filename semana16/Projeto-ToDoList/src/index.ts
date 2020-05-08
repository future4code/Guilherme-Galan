import express, { Request, Response} from 'express';
import dotenv from 'dotenv';
import knex from 'knex';
import {AddressInfo} from "net";

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

    const server = app.listen(process.env.PORT || 3000, ()=>{
        if(server){
            const address = server.address() as AddressInfo;
            console.log(`Server is runing in http://localhost:${address.port}`);
        }else {
            console.log("Failure upon startin server.");
        }
    });

const createUser = async (
    name:string,
    nickname: string,
    email: string
): Promise<void> => {
    await connection.raw(`
    INSERT INTO ToDoListUser(name, nickname, email)
    VALUES(    
    "${name}",
    "${nickname}",
    "${email}"
    )
    `);
};

app.put("/user", async(req: Request, res: Response) => {
    try{
        const name = req.body.name;
        const nickname = req.body.nickname;
        const email = req.body.email;

        if(name && nickname && email){
            await createUser(name, nickname, email)
            res.status(200).send({message: "Usuário Criado!"});
        }else{
            res.status(401).send({message: "Parâmetros Inválidos!"})
        }
    }catch(err){
        res.status(400).send({message: err.message})
    }
});

const getUserById = async (id:number): Promise<any> => {
    const result = await connection.select("*").from("ToDoListUser").where({id});
    return result;
};

app.get("/user/:id", async(req: Request, res: Response) => {
    try{
        const id = req.params.id;
        if(id){
            const result = await getUserById(id);
            res.status(200).send({user: result[0]})
        }
    }catch(err){
        res.status(400).send({message: err.message})
    }
});

const updateUser = async(id:number, name?:string, nickname?: string, email?:string): Promise<void> => {
    await connection("ToDoListUser").update({
        name: name,
        nickname: nickname,
        email:email
    })
        .where({id})
};

app.post("/user/edit", async(req: Request, res: Response) => {
    try{
        const id = req.body.id
        const name = req.body.name;
        const nickname = req.body.nickname;
        const email = req.body.email;

        if(id && name || nickname || email){
            await updateUser(id,name,nickname,email)
            res.status(200).send({message: "Usuário Atualizado!"});
        }else{
            res.status(401).send({message: "Informação Inválida"});
        }
    }catch(err){
        res.status(400).send({message:err.message})
    }
});

const createTask = async (
    title: string,
    description: string,
    limit_date: string,
    creator_user_id: number
):Promise<void> => {
    await connection.raw(`
    INSERT INTO ToDoListTask(title,description,limit_date,creator_user_id)
    VALUES(
    "${title}",
    "${description}",
    "${limit_date}",
    ${creator_user_id}
    )
    `)
};

app.put("/task", async(req: Request, res: Response) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const limit_date = req.body.limitDate;
        const creator_user_id = req.body.creatorUserId;

            await createTask(title, description, limit_date, creator_user_id)
            res.status(200).send({message: "Tarefa Criada!"});
    }catch(err){
        res.status(400).send({message: err.message})
    }
});

const getTaskById = async(id:number):Promise<any> => {
    const result = await connection.select("*").from("ToDoListTask").where({id})
    return result;
}

app.get("/task/:id", async(req: Request, res: Response) => {
    try{
        const id = Number(req.params.id);
        if(id){
            const result = await getTaskById(id);
            res.status(200).send({task: result[0]})
        }
    }catch(err){
        res.status(400).send({message: err.message})
    }
});