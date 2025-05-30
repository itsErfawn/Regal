import autoload from '@/app/autoload'
import { notFound } from 'next/navigation';
import React from 'react';
interface Controller {
    // @ts-ignore
    index: (searchParam:object,urlParam:any) => React.ReactNode;
    [key: string]: () => React.ReactNode;
}


interface AutoloadType {
    products: Controller;
}

async function page({params, searchParams}: {params: any, searchParams: any}) {

    let param=await params;
    const searchParam=await searchParams
    
    const urlParam =  param.slug;
    let [section, controller, method] = urlParam;
    // Handle main routes
    // if (!section) return notFound();
    [controller, method] = urlParam;
    const mainController = (autoload[section as keyof AutoloadType] as unknown as Controller);
    
    if (!mainController) notFound();
    
    if (!method) return mainController.index(searchParam,urlParam);
    if (!mainController[method]) return mainController.index(searchParam,urlParam);
    // @ts-ignore
    return mainController[method](searchParam,urlParam);
}

export default page