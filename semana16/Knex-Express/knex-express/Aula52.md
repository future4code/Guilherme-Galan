## Exercício 1
### A - 
Quando usamos o raw, recebemos um array com as informações que desejamos e várias outras informações que o MySQL devolve, portanto temos que acessar somente as informações que necessitamos, acessando a primeira posição da resposta -> **result[0]**.  
### B -
**Função para buscar um ator pelo nome**
const searchActorByName = async(name: string): Promise<any> => {
    const result = await connection.raw(
    `SELECT * FROM Actor WHERE name = "${name}" `
    );
    return result;
}  
### C - 
**Função que retorna a quantidade de atores por gênero**
const countActorsByGender = async(gender: string): Promise<any> => {
    const result = await connection.raw(
    `SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`
    const resultCount = result[0]
    return resultCount;
    )
}  
## Exercício 2  
### A - 
**Função para atualizar o salário de um ator**
const updateSalary = async(id: string, salary: number): Promise<any> => {
    await connection("Actor")
        .update({
            salary: salary
        })
        .where("id" , id)
}
### B - 
**Função que deleta um ator, recebendo um id**
const deleteActor = async(id: string): Promise<any> => {
    await connection("Actor")
        .delete()
        .where("id", id)
};
### C - 
**Função para calcular média de sálario por gênero**
const avgSalaryByGender = async(gender: string): Promise<any> =>{
    const result = await connection("Actor")
        .avg("salary as average")
        .where({gender})

    return result[0].average
};
(async () => {
    console.log(await avgSalaryByGender("male"));
})();
## Exercício 3
### A - 
O id está sendo lido com `req.params.id` , pois é um parâmetro que está sendo recebido pela função e passado para a URL.
### B - 
São as mensagens de sucesso e erro ao bater nesse endpoint.
### C - 
EndPoint para contar atores por gênero
app.get("/actor", async (req: Request, res: Response) => {
    try{
        const actorsByGender = await countActorsByGender(req.query.gender as string);
        res.status(200).send({
            result : actorsByGender
        })
    }catch(err){
        res.status(400).send({
            message: err.message
        })
    }
})
## Exercício 4
### A - 
EndPoint para atualizar o salário
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
})
### B - 
EndPoint para deletar um ator
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
  ## Exercício 5
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
### Exercício 6  
const getAllMovies = async (): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Filmes LIMIT 15
  `);

    return result[0];
};

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
## Exercício 7  
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


