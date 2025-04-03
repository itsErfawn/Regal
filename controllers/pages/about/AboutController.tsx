import Controller from "@/controllers/Controller";
import AboutPage from "@/views/pages/about/AboutPage";

class AboutController extends Controller{
    async index(){
        return await this.render(<AboutPage/>)
    }
}
export default new AboutController()
