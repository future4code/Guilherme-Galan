import { IdGenerator } from "../services/idGenerator";
import { InvalidParameterError } from "../errors/InvalidParameterError";
import { GenresDataBase } from "../data/GenresDataBase";

export class GenresBusiness {
    constructor(
        private genresDataBase: GenresDataBase,       
        private idGenerator: IdGenerator
    ){}

    public async addGenre(name: string){
        if(!name){
            throw new InvalidParameterError("Missing Input")
        }

        const id = this.idGenerator.generate();

        await this.genresDataBase.addGenre(id, name);

        return {message: "Adicionado com Sucesso"}
    }

    public async getAllGenres() {
        const result = await this.genresDataBase.getAllGenres();

        return result
    }
}