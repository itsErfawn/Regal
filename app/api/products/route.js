import { connectToDB } from "@/lib/database/db";
import {v4 as uuid} from "uuid"
import { NextResponse } from "next/server";

export async function GET(){
    const db=await connectToDB()
    let cataItem=[]
    const respo=await fetch("https://api.digikala.com/v1/categories/women-puffer-vest/search/?page=3")
    const products=await respo.json()
    products.data.products.forEach( async product=>{
        let url=product.title_fa.replace(/\s+/g, "-")
        let id =uuid()
        // let special=
        await db.execute("INSERT INTO `products`(`id`, `name`, `url`, `image`, `price`, `special`, `warranty`, `rate`, `category`) VALUES ('"+id+"','"+product.title_fa+"','"+url+"','"+product.images.main.url[0]+"','"+product.default_variant.price.selling_price+"','"+product.default_variant.price.rrp_price+"','"+product.default_variant.warranty.title_fa+"','"+(Number(product.rating.rate)/10).toFixed(2)+"','17')")
        await db.execute("INSERT INTO `colors`( `product_id`, `color`) VALUES ('"+id+"','"+product.default_variant.seller.grade.color+"')")
        await db.execute("INSERT INTO `sizes`( `product_id`, `size`) VALUES ('"+id+"','"+product.default_variant.size.title+"')")
        // info.push(rows)
    })
    
    return NextResponse.json({cataItem})
}
