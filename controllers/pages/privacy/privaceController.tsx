import Controller from "@/controllers/Controller";
import PrivacyPage from "@/views/pages/privacy/PrivacyPage";

class PrivacyController extends Controller{
    index(){
        return this.render(<PrivacyPage/>)
    }
}
export default new PrivacyController()