import React from 'react';
import Controller from '@/controllers/Controller';
import HomePage from '@/views/home/HomePage';
import ProductsModel from '@/models/products/ProductsModel';
import { ProductCardCollectionType } from '@/types';

class HomeController extends Controller {
    async index() {
        let data: { specialProducts: ProductCardCollectionType } = {specialProducts:[]};
        data.specialProducts=await ProductsModel.getSpecialProducts(10)
        return this.render(<HomePage data={data} />)
    }
}

export default new HomeController();
