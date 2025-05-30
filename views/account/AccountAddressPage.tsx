"use client"
import AccountAddressAdd from '@/components/templates/account/AccountAddressAdd'
import AccountAddressEmpty from '@/components/templates/account/AccountAddressEmpty'
import { AddCircle } from 'iconsax-react'
import React, { useState } from 'react'

function AccountAddressPage() {
  const [active,setActive]=useState(false)
  return (
    <>
      <div className="account-content-wrapper max-mobile:border-none max-mobile:!p-0">
        <div className="account-content-header">
          <h6 className="account-content-header-title">لیست آدرس‌ها</h6>
          <button className='btn account-content-header-addBtn' onClick={e=>{setActive(true)}} >
            <AddCircle className='account-content-header-addBtn_icon' />
            <span className='account-content-header-addBtn_text' >افزودن آدرس جدید</span>
          </button>
        </div>
        <div className="account-content-body h-full">
          <AccountAddressEmpty {...{active,setActive}} />
        </div>
      </div>
      <AccountAddressAdd {...{active,setActive}} />
    </>
  )
}

export default AccountAddressPage 