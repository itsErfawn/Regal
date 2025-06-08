import { blogCollectionType, blogType } from "@/types/blogs";
import Model from "../Model";

class BlogModel extends Model{
async getHomeBlogs(){
return await this.db.blog.findMany({take:8}) as blogCollectionType
}
async getBlog(title:string){
    return await this.db.blog.findFirst({where:{title}}) as blogType
}
}
export default new BlogModel()