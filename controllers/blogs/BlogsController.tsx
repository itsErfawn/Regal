import Controller from "@/controllers/Controller";
import BlogsPage from "@/views/blogs/BlogsPage";
import SingleBlogPage from "@/views/blogs/SingleBlogPage";

class BlogsController extends Controller{
    index(searchParam:any,urlParam:any){
        if(urlParam[1]){
            return this.single()
        }
        
        return  this.render(<BlogsPage/>)
    }
    async single(){
        return  this.render(<SingleBlogPage/>)
    }
}
export default new BlogsController()