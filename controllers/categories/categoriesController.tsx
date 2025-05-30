import Controller from "@/controllers/Controller";
import CategoriesModel from "@/models/categories/CategoriesModel";
import ProductsModel from "@/models/products/ProductsModel";
import Categoriespage from "@/views/categories/Categoriespage";
import { notFound } from "next/navigation";
import React from "react";

class CategoriesController extends Controller{
async index(searchParam:{},urlParam:string[]){
    const category=await CategoriesModel.getCategory(decodeURI(urlParam[1]))
    if(!category)notFound();
    let data;
    if(!category.parent_id){
        // for categories that parent products are empty
    }
    data=await ProductsModel.getProductsByCategory(category.id)
return this.render(<Categoriespage category={category} products={data} />)
}
}
export default new CategoriesController()