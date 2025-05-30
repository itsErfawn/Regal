import Controller from "@/controllers/Controller";
import TermsPage from "@/views/terms/TermsPage";

class TermsController extends Controller {
    index() {
        return this.render(<TermsPage />)
    }
}

export default new TermsController(); 