import Controller from "@/controllers/Controller";
import AboutPage from "@/views/about/AboutPage";

class AboutController extends Controller{
    index(){
        return this.render(<AboutPage/>)
    }
}
export default new AboutController()
