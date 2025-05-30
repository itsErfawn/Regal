import { ProductCardCollectionType, ProductInterFace } from "@/types";
import Model from "../Model";

class ProductsModel extends Model{
async getProductsByCategory(category_id:number,limit?:number) {
return await this.db.products.findMany({
    where:{
        category:category_id
    },
    take:limit?limit:10
})
}
async getSpecialProducts(limit:number){
    return await this.db.products.findMany({
        where:{
            special:{
                gt:0
            }
        },
        take:limit,
        select:{
            id:true,
            name:true,
            image:true,
            special:true,
            url:true,
            price:true
        }
    }) as ProductCardCollectionType
}
async getProduct(url:string){
return await this.db.products.findFirst({
    where:{
        url:decodeURI(url)
    }
}) as ProductInterFace
}
async getRelatedProducts(category:number,id:string){
    return await this.db.products.findMany({
        where:{
            category,
            NOT:{
                id
            }
        },
    }) as ProductCardCollectionType
}
}
export default new ProductsModel();