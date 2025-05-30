import Link from 'next/link'
import React from 'react'

function AccountEditPage() {
  return (
    <div className="account-content-wrapper max-mobile:border-none max-mobile:!p-0">
      <div className="account-content-header">
        <h6 className="account-content-header-title">اطلاعات حساب کاربری</h6>
      </div>
      <div className="account-content-body flex flex-col items-center justify-between h-[90%] ">
        <div className="flex flex-wrap">
        <div className="account-input-container">
          <div className="account-input-wrapper">
            <input type="text" className='account-input' placeholder='نام' />
          </div>
        </div>
        <div className="account-input-container">
          <div className="account-input-wrapper">
            <input type="text" className='account-input' placeholder='نام‌خانوادگی' />
          </div>
        </div>
        <div className="account-input-container">
          <div className="account-input-wrapper">
            <input type="text" className='account-input ' disabled placeholder='9121234567' />
          </div>
        </div>
        <div className="account-input-container">
          <div className="account-input-wrapper">
            <input type="text" className='account-input' placeholder='آدرس ایمیل (اختیاری)' />
          </div>
        </div>
        </div>
        <div className="w-full flex items-center gap-5 justify-end max-mobile:flex-wrap max-mobile:flex-col-reverse">
          <Link href={'/account'} className='btn out-line flex items-center justify-center w-4/12 max-tablet:w-6/12 max-mobile:w-full' >انصراف</Link>
          <button className='btn primary w-4/12 max-tablet:w-6/12 max-mobile:w-full' disabled >ذخیره تغییرات</button>
        </div>
      </div>
    </div>
  )
}

export default AccountEditPage