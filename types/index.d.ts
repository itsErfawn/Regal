export interface ProductCardType{
id:string,
name:string,
url:string,
price:number,
special:number,
image:string
}
export type ProductCardCollectionType = ProductCardType[];
export interface ProductInterFace{
id:string,
name:string,
url:string,
price:number,
special:number,
image:string,
category:number,
warranty:string,
rate:number,
description:string,
quantity:number
}
export interface CtegoriesInterFace{
    id:number,
    name:string,
    url:string,
    parent_id:number,
    children:CtegoriesInterFace[]|null
}
export type CtegoriesCollectionType=CtegoriesInterFace[];