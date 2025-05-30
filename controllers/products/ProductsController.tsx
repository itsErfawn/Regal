import Controller from "@/controllers/Controller";
import ColorGenerator from "@/lib/color/ColorGenerator";
import ProductsModel from "@/models/products/ProductsModel";
import ProductsPage from "@/views/products/ProductsPage";
import { notFound } from "next/navigation";

class ProductsController extends Controller {
    async index(searchParam:{},urlParam:string[]){
        if(!urlParam[1])notFound();
        const product=await ProductsModel.getProduct(urlParam[1])
        if(!product)notFound();
        let colors:string[]=[]
        Array.from({length:3}).forEach(()=>{
            colors.push(ColorGenerator())
        })
        const related_product=await ProductsModel.getRelatedProducts(product.category,product.id)
        return this.render(<ProductsPage related_product={related_product} colors={colors} product={product}/>)
    }
}

export default new ProductsController()
