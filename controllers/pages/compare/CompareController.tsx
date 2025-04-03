import Controller from "@/controllers/Controller";
import ComparePage from "@/views/pages/compare/ComparePage";
import React from "react";
class CompareController extends Controller{
    async index(){
        return await  this.render(<ComparePage/>)
    }
}
export default new CompareController()