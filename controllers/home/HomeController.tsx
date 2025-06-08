import React from 'react';
import Controller from '@/controllers/Controller';
import HomePage from '@/views/home/HomePage';
import ProductsModel from '@/models/products/ProductsModel';
import { ProductCardCollectionType } from '@/types';
import BlogModel from '@/models/blogs/BlogModel';
import { blogCollectionType } from '@/types/blogs';

class HomeController extends Controller {
    async index() {
        let data: { specialProducts: ProductCardCollectionType,blogs:blogCollectionType } = {specialProducts:[],blogs:[]};
        data.specialProducts=await ProductsModel.getSpecialProducts(10)
        data.blogs=await BlogModel.getHomeBlogs()
        return this.render(<HomePage data={data} />)
    }
}

export default new HomeController();
