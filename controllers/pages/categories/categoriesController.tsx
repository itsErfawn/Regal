import Controller from "@/controllers/Controller";
import Categoriespage from "@/views/pages/categories/Categoriespage";
import React from "react";

class CategoriesController extends Controller{
index(){
return this.render(<Categoriespage/>)
}
}
export default new CategoriesController()