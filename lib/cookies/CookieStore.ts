import { cookies } from "next/headers";

class CookieStore{
    async get(name:string): Promise<any>{
        const cookie=await cookies()
        return cookie.get(name)
    }
    async getAll(){
        return (await cookies()).getAll()
    }
    async set(name:string,value:string){
        const date=new Date()
        date.setMonth(date.getMonth()+2)
        return (await cookies()).set(name,value,{
            secure:true,
            httpOnly:true,
            path:'/',
            maxAge:date
        })
    }
    async delete(name:string){
        (await cookies()).set(name,'',{maxAge:0})
    }
}
export default new CookieStore()