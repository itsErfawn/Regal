import { connectToDB } from "@/lib/database/db";
import mysql from 'mysql2/promise';

class Model {
    protected db: Promise<mysql.Connection>;

    constructor() {
        this.db = this.dbConnect();
    }

    private async dbConnect() {
        return await connectToDB();
    }

    protected async getConnection() {
        return await this.db;
    }
    async endConnection(){
        (await this.db).end()
    }
}

export default Model;