import Controller from "@/controllers/Controller";
import TermsPage from "@/views/pages/terms/TermsPage";

class TermsController extends Controller {
    async index() {
        return await  this.render(<TermsPage />)
    }
}

export default new TermsController(); 