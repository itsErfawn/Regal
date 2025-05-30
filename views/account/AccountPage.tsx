import AccountSideBar from '@/components/modules/accountSideBar/AccountSideBar'
import { Edit2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

function AccountPage() {
  return (
    <>
    <div className="account-content-wrapper max-laptop:hidden">
        <div className="account-content-header">
            <h6 className="account-content-header-title">اطلاعات حساب کاربری</h6>
            <Link href={'/account/edit'} className='text-primary stroke-primary flex items-center gap-2'>
            <Edit2 className='w-5 h-5' />
            <span>ویرایش اطلاعات</span>
            </Link>
        </div>
        <div className="account-content-body">
            <div className="account-content-body-item">
                <p className="account-content-body-item-title">نام</p>
                <p className="account-content-body-item-value">نام وارد نشده است</p>
            </div>
            <div className="account-content-body-item">
                <p className="account-content-body-item-title">نام‌خانوادگی</p>
                <p className="account-content-body-item-value">نام‌خانوادگی وارد نشده است</p>
            </div>
            <div className="account-content-body-item">
                <p className="account-content-body-item-title">شماره تلفن همراه</p>
                <p className="account-content-body-item-value">+989162435737</p>
            </div>
            <div className="account-content-body-item">
                <p className="account-content-body-item-title">آدرس ایمیل</p>
                <p className="account-content-body-item-value">آدرس ایمیل وارد نشده است</p>
            </div>
        </div>
    </div>
    <div className="laptop:hidden">
    <AccountSideBar {...{url:undefined}} />
    </div>
    </>
  )
}

export default AccountPage