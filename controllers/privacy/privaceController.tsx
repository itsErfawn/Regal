import Controller from "@/controllers/Controller";
import PrivacyPage from "@/views/privacy/PrivacyPage";

class PrivacyController extends Controller{
    index(){
        return this.render(<PrivacyPage/>)
    }
}
export default new PrivacyController()