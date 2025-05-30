import Controller from "@/controllers/Controller";
import CartPage from "@/views/cart/CartPage";

class CartController extends Controller{
index(){
    return this.render(<CartPage/>)
}
}
export default new CartController();