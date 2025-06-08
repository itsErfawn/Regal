import Controller from "@/controllers/Controller";
import CookieStore from "@/lib/cookies/CookieStore";
import { tokenVerifier } from "@/lib/token/Token";
import CartModel from "@/models/cart/CartModel";
import CartPage from "@/views/cart/CartPage";
import { forbidden } from "next/navigation";

class CartController extends Controller{
async index(){
    const token=await CookieStore.get("user_token")||await CookieStore.get("geust_token");
    const val=tokenVerifier(token.value) as {id:string,value:string}
    if(!val){
        forbidden()
    }
    const data=await CartModel.getCart(val.id)
    return this.render(<CartPage data={data} />)
}
}
export default new CartController();