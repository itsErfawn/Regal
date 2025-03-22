import React from 'react';
import Controller from '@/controllers/Controller';
import HomePage from '@/views/pages/home/HomePage';
import Model from '@/models/Model';

class HomeController extends Controller {
    async index() {
        
        const data:{name:string,id:number}=new Model().index()
        
        return this.render(<HomePage {...{data}} />)
    }
}

export default new HomeController();
