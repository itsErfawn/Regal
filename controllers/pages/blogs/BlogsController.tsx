import Controller from "@/controllers/Controller";
import BlogsPage from "@/views/pages/blogs/BlogsPage";
import SingleBlogPage from "@/views/pages/blogs/SingleBlogPage";

class BlogsController extends Controller{
    async index(searchParam:any,urlParam:any){
        if(urlParam[1]){
            return this.single()
        }
        
        return await  this.render(<BlogsPage/>)
    }
    async single(){
        return await  this.render(<SingleBlogPage/>)
    }
}
export default new BlogsController()