export interface CategoryInterFace{
    id:number,
    name:string,
    url:string,
    parent_id:number,
    children:CategoryInterFace[]|null
}