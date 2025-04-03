"use client"
import React, { useState } from 'react'

function AccountAddressEmpty({active,setActive}:{active:boolean,setActive:(active:boolean)=>void}) {
    return (
        <>
            <div className='empty-wrapper' >
                <img src="/assets/images/empty.png" className='empty-wrapper-image' />
                <p className='empry-wrapper-title' >شما در حال حاضر هیچ آدرسی ثبت نکرده‌اید!</p>
                <button className='btn primary empty-wrapper-btn' onClick={e=>{setActive(true)}}>افزودن آدرس</button>
            </div>
        </>
    )
}

export default AccountAddressEmpty