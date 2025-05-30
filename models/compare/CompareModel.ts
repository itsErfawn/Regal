import Model from "../Model";

class CompareMode extends Model{
async add(customer_id:string,data:{product_id:string}){
const compare=await this.db.compare.findMany({where:{product_id:data.product_id,customer_id}})
if(compare.length===2){
    await this.db.compare.delete({where:{id:compare[0].id}})
}
await this.db.compare.create({
    data:{
        product_id:data.product_id,
        customer_id
    }
})
}
}
export default new CompareMode();