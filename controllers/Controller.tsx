import React, { JSX } from 'react';
import HomeLayout from '@/layouts/home/layout';
import Header from '@/components/templates/header/Header';
import Footer from '@/components/templates/footer/Footer';
import CookieStore from '@/lib/cookies/CookieStore';
import { tokenVerifier } from '@/lib/token/Token';

class Controller {
    protected async render(data: JSX.Element): Promise<JSX.Element> {
        let isLogin=true
        const token=await CookieStore.get('token')
        
        if(!token||!tokenVerifier(token.value)){
            isLogin=false
        }
        return (
            <HomeLayout>
                <>
                    <Header {...{isLogin}} />
                    {data}
                    <Footer/>
                </>
            </HomeLayout>
        )
    }
}

export default Controller;
