const jwt=require('jsonwebtoken')
import { verify } from 'jsonwebtoken'
export default function tokenGenerator(data:string){
    const token=jwt.sign(data,process.env.privateKey,{algorithm:"HS256"})
    return token
}
export function tokenVerifier(data:string){
    try{
        const validation=verify(data,process.env.privateKey)
        return validation
    }catch(err){
        return false
    }
}