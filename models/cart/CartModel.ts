import Model from "../Model";

class CartModel extends Model{
async addProduct(customer_id:string,data:{product_id:string,color:string,size:string}){
let quantity=1
const cart=await this.db.cart.findFirst({where:{product_id:data.product_id,customer_id}})
if(cart){
    quantity+=cart.quantity
    await this.db.cart.update({data:{quantity},where:{id:cart.id}})
    return
}
await this.db.cart.create({
    data:{
        product_id:data.product_id,
        quantity,
        color:data.color,
        size:data.size,
        customer_id
    }
})
}
}
export default new CartModel()