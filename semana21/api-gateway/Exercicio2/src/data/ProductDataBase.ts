import { BaseDataBase } from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
    private static TABLE_NAME: string = "Products";

    public async create(
        id: string,
        name: string,
        price: number,
        img: string
    ): Promise<void> {
        await this.connection()
        .insert({
            id,
            name,
            price,
            img
        })
        .into(ProductDataBase.TABLE_NAME)
    }

    public async getById(id: string):Promise<any | undefined>{
        const result = await this.connection().raw(`
            SELECT * FROM ${ProductDataBase.TABLE_NAME} WHERE id = "${id}"
        `)

        return result[0][0]
    
    }
}