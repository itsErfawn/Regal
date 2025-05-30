import React, { JSX } from 'react';
import Header from '@/components/templates/header/Header';
import Footer from '@/components/templates/footer/Footer';

class Controller {
    protected render(data: JSX.Element): JSX.Element {
        return (
                <>
                    <Header/>
                    {data}
                    <Footer/>
                </>
        )
    }
}

export default Controller;
