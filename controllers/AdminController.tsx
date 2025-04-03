import AdminHeader from "@/components/templates/adminHeader/AdminHeader";
import AdminSideBar from "@/components/templates/adminSideBar/AdminSideBar";
import AdminLayout from "@/layouts/admin/layout";
import { JSX } from "react";

class AdminController{
    protected render(children:JSX.Element):JSX.Element{
        return(
            <>
            <AdminLayout>
            <div className="flex flex-wrap items-stretch" >
            <div className="w-3/12">
            <AdminSideBar/>
            </div>
            <div className="w-9/12">
            <AdminHeader/>
            {children}
            </div>
            </div>
            </AdminLayout>
            </>
        )
    }
}
export default  AdminController