import { QueryResult } from "mysql2";
import Model from "../Model";

class CategoriesModel extends Model{
async getCategoriesHeader():Promise<QueryResult>{
    const db=await this.getConnection()
    const [rows]=await db.execute("SELECT parent_categories.name AS name,parent_categories.url AS url, JSON_ARRAYAGG( JSON_OBJECT( 'id', child_categories.id, 'name', child_categories.name, 'parent', child_categories.parent, 'url', child_categories.url, 'image', child_categories.image ) ) AS children FROM categories AS parent_categories LEFT JOIN categories AS child_categories ON parent_categories.id = child_categories.parent WHERE parent_categories.parent = 0 GROUP BY parent_categories.id")
    return rows
}
}
export default new CategoriesModel();