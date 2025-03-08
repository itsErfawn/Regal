import React, { JSX } from 'react';
import HomeLayout from '@/layouts/home/layout';
class Controller {
    protected modelPath=''
    protected render(data:JSX.Element):JSX.Element{
        return <HomeLayout>{data}</HomeLayout>
    }
    protected async modelLoader(moduleName: string) {
        const modulePaths: Record<string, string> = {
            model: '@/models/Model',
        };
    
        const m = await import(modulePaths[moduleName]);
        return new m.default();
    }
    
}

export default Controller;
