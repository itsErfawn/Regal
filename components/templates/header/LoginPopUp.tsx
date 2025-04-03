"use client"
import { CloseCircle, User } from 'iconsax-react'
import React, { useState } from 'react'
import LoginStepOne from '../login/LoginStepOne'
import LoginStepTwo from '../login/LoginStepTwo'
function LoginPopUp() {
    const [step, setStep] = useState(0)
    const [active,setActive]=useState(false)
    return (
        <>
            <User className='header-icons cursor-pointer' onClick={e=>{setActive(true)}} />
            <div className={`bg-overlay ${active?'active':''} !top-0 !z-30`} ></div>
            <div className={`login-container ${active?'active':''} `} onClick={e=>{setActive(false)}}>
                <div className="login-wrapper" onClick={e=>{e.stopPropagation()}}>
                    <div className="login-col content">
                        <div className="login-col-part flex flex-col  gap-5">
                            <img src="/assets/icons/Logo Svg.svg" alt="" />
                            <h4 className='login-wrapper-title'>
                                به <span className='text-primary' >رگال </span> خوش آمدید
                            </h4>
                        </div>
                        {step===0?
                        <LoginStepOne {...{setStep}}/>:''
                        }
                        {step===1?
                        <LoginStepTwo {...{setStep}}/>:''
                        }
                    </div>
                    <div className="login-col max-tablet:hidden">
                        <button className='login-close-btn' >
                            <CloseCircle className="login-close-btn" onClick={e=>{setActive(false)}} />
                        </button>
                        <img src="/assets/images/login-image.png" className='login-image-banner' alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPopUp