import AdminHomeController from "@/controllers/admin/AdminHomeController";
import AdminController from "@/controllers/AdminController";
import AboutController from "@/controllers/pages/about/AboutController";
import AccountController from "@/controllers/pages/account/AccountController";
import BlogsController from "@/controllers/pages/blogs/BlogsController";
import CartController from "@/controllers/pages/cart/CartController";
import categoriesController from "@/controllers/pages/categories/categoriesController";
import CompareController from "@/controllers/pages/compare/CompareController";
import HomeController from "@/controllers/pages/home/HomeController";
import privaceController from "@/controllers/pages/privacy/privaceController";
import ProductsController from "@/controllers/pages/products/ProductsController";
import TermsController from "@/controllers/pages/terms/TermsController";
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
        home:AdminHomeController,
    }
}


export default Routes;