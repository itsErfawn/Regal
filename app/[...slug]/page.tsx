import autoload from '@/app/autoload'
import { notFound } from 'next/navigation';
import React from 'react';

interface Controller {
    index: (searchParam:object,urlParam:any) => React.ReactNode;
    [key: string]: () => React.ReactNode;
}

interface AdminController extends Controller {
    [key: string]: () => React.ReactNode;
}

interface AutoloadType {
    products: Controller;
    admin: {
        home: AdminController;
        products: AdminController;
    };
}

async function page({params, searchParams}: {params: any, searchParams: any}) {
    let param=await params;
    const searchParam=await searchParams
    
    const urlParam =  param.slug;
    let [section, controller, method] = urlParam;

    // Handle admin routes
    if (section === "admin") {
        if(!controller) return autoload.admin.home.index();
        const adminController = (autoload.admin[controller as keyof typeof autoload.admin] as unknown as AdminController);
        if (!adminController) notFound();
        
        if (!method) return adminController.index(searchParam,urlParam);
        if (!adminController[method]) notFound();
        return adminController[method]();
    }
    
    // Handle main routes
    // if (!section) return notFound();
    [controller, method] = urlParam;
    const mainController = (autoload[section as keyof AutoloadType] as unknown as Controller);
    
    if (!mainController) notFound();
    
    if (!method) return mainController.index(searchParam,urlParam);
    if (!mainController[method]) return mainController.index(searchParam,urlParam);
    return mainController[method](searchParam,urlParam);
}

export default page