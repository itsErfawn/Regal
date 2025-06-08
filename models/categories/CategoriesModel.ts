import { CtegoriesCollectionType } from "@/types";
import Model from "../Model";
import { CategoryInterFace } from "@/types/categories";

class CategoriesModel extends Model {
    async getCategories() {
        const mainCategories = await this.db.category.findMany({
            where: {
                parent_id: 0,
            },
        });
// @ts-ignore
const categoriesWithChildren = await Promise.all(
    mainCategories.map(async (category) => {
        const children = await this.db.category.findMany({
            where: {
                parent_id: category.id,
            },
        });
        
        return { ...category, children };
    })
) as CtegoriesCollectionType ;
return categoriesWithChildren;
}
async getCategory(url:string){
        // @ts-ignore
        return await this.db.category.findFirst({
            where:{
                url
            }
        }) as CategoryInterFace
    }
}
export default new CategoriesModel();