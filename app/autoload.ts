import AboutController from "@/controllers/about/AboutController";
import AccountController from "@/controllers/account/AccountController";
import BlogsController from "@/controllers/blogs/BlogsController";
import CartController from "@/controllers/cart/CartController";
import categoriesController from "@/controllers/categories/categoriesController";
import CompareController from "@/controllers/compare/CompareController";
import HomeController from "@/controllers/home/HomeController";
import privaceController from "@/controllers/privacy/privaceController";
import ProductsController from "@/controllers/products/ProductsController";
import TermsController from "@/controllers/terms/TermsController";
const Routes={
    home:HomeController,
    products:ProductsController,
    categories:categoriesController,
    terms:TermsController,
    privacy:privaceController,
    about:AboutController,
    compare:CompareController,
    cart:CartController,
    account:AccountController,
    blogs:BlogsController,
    admin:{
        home:HomeController,
    }
}


export default Routes;