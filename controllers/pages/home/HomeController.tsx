import React from 'react';
import Controller from '@/controllers/Controller';
import HomePage from '@/views/pages/home/HomePage';

class HomeController extends Controller {
    async index() {
        return await  this.render(<HomePage />)
    }
}

export default new HomeController();
