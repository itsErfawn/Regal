import Model from "../Model";

class CutomerModel extends Model{
    async createFirst(info:{id:string,number:string}):Promise<void>{
        const db = await this.getConnection(); 
        db.execute("INSERT INTO `customers`(`id`, `name`, `family`, `number`) VALUES ('"+info.id+"','کاربر','رگال','"+info.number+"')")
    }
}
export default new CutomerModel()