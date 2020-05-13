import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

      private static TABLE_NAME: string = "User";

      public async createUser(
          id:string,
          email: string,
          password: string,
          role: string
      ): Promise<void> {
          await this.connection() 
          .insert({
              id,
              email,
              password,
              role
          })
          .into(UserDatabase.TABLE_NAME)
      };

      public async getUserByEmail(email: string): Promise<any>{
            const result = await this.connection().raw(`
                SELECT * FROM ${UserDatabase.TABLE_NAME} WHERE email = "${email}"
            `)
          return result[0][0]
      }

      public async getUserById(id: string): Promise<any>{
          const result = await this.connection()
          .select("*")
          .from(UserDatabase.TABLE_NAME)
          .where({id})

          return result[0]
      }

      public async deleteUser(id: string): Promise<void>{
        await this.connection()
        .delete()
        .from(UserDatabase.TABLE_NAME)
        .where({id})
      }
}