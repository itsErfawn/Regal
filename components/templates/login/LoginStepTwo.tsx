// import { LoginUser } from "@/actions/login/LoginAction"
import {InputOTP,InputOTPGroup,InputOTPSlot,} from "@/components/ui/input-otp"
import { redirect } from "next/navigation"
import React, { useActionState } from 'react'

const initRes={
  error:'',
  success:''
}
function LoginStepTwo({setStep}:{setStep:(step:number)=>void}) {
  // const [action,formAction]=useActionState(LoginUser,initRes)
  // if(action.success){
  //   redirect(location.href)
  // }
  return (
    <form  className="login-col-part w-full">
    <h6 className='login-wrapper-content-title' >تایید شماره موبایل</h6>
    <div className='' >
        <span className='login-wrapper-content-text text-[14px]'>کد ارسال شده به 09162435737 را وارد کنید.</span>
        <p className='login-wrapper-content-text text-[14px] !text-primary cursor-pointer' onClick={e=>{setStep(0)}} >ویرایش شماره موبایل</p>
    </div>
    <InputOTP maxLength={6}  name="otpCode" >
  <InputOTPGroup className="gap-2 flex-row-reverse w-full mb-4" >
    {/* sample
     <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 ${action.error&&"!border-error"} `}  index={0} /> */}
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `}  index={0} />
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `} index={1} />
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `} index={2} />
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `} index={3} />
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `} index={4} />
    <InputOTPSlot className={` !rounded-sm w-2/12 h-14 !border-neutral-4 `} index={5} />
  </InputOTPGroup>
</InputOTP>
{/* {action.error&& <p className="mb-4 text-[14px] text-error" >{action.error}</p>} */}
    <button type="submit" className='btn primary login-wrapper-content-setp-one-btn 'onClick={e=>{setStep(1)}} >تایید و ادامه</button>
</form>
  )
}

export default LoginStepTwo