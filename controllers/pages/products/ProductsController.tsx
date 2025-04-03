import Controller from "@/controllers/Controller";
import ProductsPage from "@/views/pages/products/ProductsPage";

class ProductsController extends Controller {
    async index(){
        return await  this.render(<ProductsPage/>)
    }
}

export default new ProductsController()
