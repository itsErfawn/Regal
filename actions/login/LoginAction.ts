"use server"
import {v4 as uuidv4} from "uuid"
import CookieStore from "@/lib/cookies/CookieStore"
import loginValidatior from "@/lib/validate/Login"
import LoginModel from "@/models/login/LoginModel"
import tokenGenerator from "@/lib/token/Token"
import CustomerModel from "@/models/customer/CustomerModel"

export async function submitLogin(prevState:any,formData:FormData){
const number:any=formData.get('number')
const formVal=loginValidatior({number})
if(formVal!==true){
    return{success:'',error:formVal[0].message}
}
const serial=await LoginModel.setOTP(number)
return {
    success:serial,
    error:''
}
}
export async function LoginUser(prevState:any,formData:FormData) {
    const otp=formData.get('otpCode')
    const status= await LoginModel.submiOTP(otp as string)
    if(status.error){
        return status
    }
    const id =uuidv4()
    const token=tokenGenerator({id,number:status.success})
    await CookieStore.set('token',token)
   await CustomerModel.createFirst({id,number:status.success})
    return status.success
}