import Controller from "@/controllers/Controller";
import CartPage from "@/views/pages/cart/CartPage";

class CartController extends Controller{
async index(){
    return await  this.render(<CartPage/>)
}
}
export default new CartController();