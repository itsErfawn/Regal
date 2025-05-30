// import {submitLogin} from '@/actions/login/LoginAction';
import Link from 'next/link';
import React, { useActionState, useState } from 'react';

function LoginStepOne({ setStep }: { setStep: (step: number) => void }) {
  const initialResponse = {
    success: '',
    error: ''
  };

  // const [formState, formAction] = useActionState(submitLogin, initialResponse);
  const [agree, setAgree] = useState(false);
  const [nt,Setnt]=useState(false)
  const changeHandler = (status: boolean) => {
    setAgree(status);
  };
  // if(formState.success){
  //   Notification.requestPermission().then(prem=>{
  //     if(prem==="granted"){
  //       new Notification(`کد تایید حساب کاربری شما : ${formState.success}`,{
  //         icon:'/assets/icons/Logo Svg.svg'
  //       })
  //       setStep(1)
  //     }else{
  //       Setnt(true)
  //     }
  //   })
  // }
  return (
    <form  className="login-col-part">
      <h6 className='login-wrapper-content-title'>عضویت یا ورود</h6>
      <p className='login-wrapper-content-text'>کد تایید به شماره موبایلی که وارد میکنید ارسال خواهد شد.</p>
      {/* <input type="text" className={`login-wrapper-content-setp-input ${formState.error&&'!border-error'}`} placeholder='شماره موبایل' name='number' /> */}
      <input type="text" className={`login-wrapper-content-setp-input `} placeholder='شماره موبایل' name='number' />
      {/* {formState.error&&<p className='text-error mb-4 text-[14px]' >{formState.error}</p>} */}
      {nt&&<p className='text-error mb-4 text-[14px]' >لطفااعلان ها را در سایت باز کنید</p>}
      <div className='login-wrapper-content-step-term-wrapper'>
        <input 
          type="checkbox" 
          className='login-wrapper-content-step-term-input' 
          onChange={e => changeHandler(e.target.checked)} 
        />
        <p className='login-wrapper-content-step-term-text'>
          با ورود و ثبت نام در سایت با 
          <Link href={'/terms'} className='text-info'> قوانین رگال </Link>
          موافقت میکنم
        </p>
      </div>
      <button 
        className='btn primary login-wrapper-content-setp-one-btn' 
        disabled={!agree} 
        type='submit'
      >
        <span>تایید و ادامه</span>
      </button>
    </form>
  );
}

export default LoginStepOne;