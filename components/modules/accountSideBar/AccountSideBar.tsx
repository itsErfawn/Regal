import {  Edit2, Heart, Location, Logout, User, Wallet2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

function AccountSideBar({url}:{url:string|undefined}) {
    
  return (
    <>
    <div className="account-side-wrapper">
        <div className="account-side-info-wrapper">
            <div className="flex items-center gap-2">
            <img src="/assets/icons/avatar.png" className='account-side-info_image' alt="" />
            <div className="">
                <p className="account-side-info_name">کاربر رگال</p>
                <p className="account-side-info_phone">09162435737</p>
            </div>
            </div>
            <Link href={'/account/edit'} className='stroke-primary text-primary flex items-center gap-2 text-[14px]' >
            <Edit2 className=' w-4 h-4' />
            <span>ویرایش</span>
            </Link>
        </div>
    </div>
    <div className="account-side-wrapper mt-4">
        <ul className="">
            <li className={`account-side-menu-item ${!url?'active':''}`}>
                <Link className='account-side-menu-item_link' href={'/account'}>
                <User className='account-side-menu-item_link__icon' />
                <span className='account-side-menu-item_link__text'>حساب کاربری</span>
                </Link>
            </li>
            <li className={`account-side-menu-item ${url==='orders'?'active':''}`}>
                <Link className='account-side-menu-item_link' href={'/account/orders'}>
                <Wallet2 className='account-side-menu-item_link__icon' />
                <span className='account-side-menu-item_link__text'>پیگیری سفارشات</span>
                </Link>
            </li>
            <li className={`account-side-menu-item ${url==='wishlist'?'active':''}`}>
                <Link className='account-side-menu-item_link' href={'/account/wishlist'}>
                <Heart className='account-side-menu-item_link__icon' />
                <span className='account-side-menu-item_link__text'>علاقمندی‌ها</span>
                </Link>
            </li>
            <li className={`account-side-menu-item ${url==='address'?'active':''}`}>
                <Link className='account-side-menu-item_link' href={'/account/address'}>
                <Location className='account-side-menu-item_link__icon' />
                <span className='account-side-menu-item_link__text'>آدرس‌های من</span>
                </Link>
            </li>
            <li className={`account-side-menu-item ${url==='logout'?'active':''}`}>
                <Link className='account-side-menu-item_link' href={'/account/logout'}>
                <Logout className='account-side-menu-item_link__icon' />
                <span className='account-side-menu-item_link__text'>خروج</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default AccountSideBar