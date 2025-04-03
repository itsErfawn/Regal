import AdminHomePage from "@/views/admin/home/AdminHomePage";
import AdminController from "../AdminController";

class AdminHomeController extends AdminController{
async index(){
    return await this.render(<AdminHomePage/>)
}
}
export default new AdminHomeController()