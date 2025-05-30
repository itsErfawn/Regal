import Controller from "@/controllers/Controller";
import ComparePage from "@/views/compare/ComparePage";
import React from "react";
class CompareController extends Controller{
    index(){
        return this.render(<ComparePage/>)
    }
}
export default new CompareController()