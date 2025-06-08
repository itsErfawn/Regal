import { ProductCardType } from ".."

export type CartType={
id:number,
quantity:number,
customer_id:string,
product_id:string,
color:string,
size:string
product:ProductCardType
}
export type CartCollectionType=CartType[]