import React, { JSX } from 'react';
import HomeLayout from '@/layouts/home/layout';
import Header from '@/components/templates/header/Header';
import Footer from '@/components/templates/footer/Footer';

class Controller {
    protected render(data: JSX.Element): JSX.Element {
        return (
            <HomeLayout>
                <>
                    <Header/>
                    {data}
                    <Footer/>
                </>
            </HomeLayout>
        )
    }
}

export default Controller;
