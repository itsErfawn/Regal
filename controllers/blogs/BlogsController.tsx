import Controller from "@/controllers/Controller";
import BlogModel from "@/models/blogs/BlogModel";
import BlogsPage from "@/views/blogs/BlogsPage";
import SingleBlogPage from "@/views/blogs/SingleBlogPage";
import { notFound } from "next/navigation";

class BlogsController extends Controller{
    index(searchParam:any,urlParam:string[]){
        if(urlParam[1]){
            return this.single(urlParam)
        }
        return  this.render(<BlogsPage/>)
    }
    async single(urlParam:string[]){
        if(!urlParam[1]){notFound()}
        const slug=decodeURI(urlParam[1])
        const name = slug.replace(/-/g, ' ');
        const blog=await BlogModel.getBlog(name)
        if(!blog){notFound()}
        return  this.render(<SingleBlogPage {...{blog}} />)
    }
}
export default new BlogsController()