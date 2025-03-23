import AccountSideBar from "@/components/modules/accountSideBar/AccountSideBar";
import Controller from "@/controllers/Controller";
import AccountEditPage from "@/views/pages/account/AccountEditPage";
import AccountPage from "@/views/pages/account/AccountPage";

import { JSX } from "react";

class AccountController extends Controller{
protected renderAccount(children:JSX.Element,url:string|undefined){
    
    return this.render(
        <div className="my-8">
        <div className="container">
            <div className="col-span-3 max-laptop:hidden"><AccountSideBar {...{url}}/></div>
            <div className="col-span-9 max-laptop:col-span-12">{children}</div>
        </div>
        </div>
    )
}
index(search:object,param:any){
    
    return this.renderAccount(<AccountPage/>,param[1])
}
edit(search:object,param:any){
return this.renderAccount(<AccountEditPage/>,undefined)
}
}
export default new AccountController();