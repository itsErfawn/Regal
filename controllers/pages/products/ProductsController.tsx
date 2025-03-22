import Controller from "@/controllers/Controller";
import ProductsPage from "@/views/pages/products/ProductsPage";

class ProductsController extends Controller {
    index(){
        return this.render(<ProductsPage/>)
    }
}

export default new ProductsController()
