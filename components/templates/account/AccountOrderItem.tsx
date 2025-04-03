import { ArrowDown2, Calendar, DiscountShape, Location, TruckFast, Wallet2 } from 'iconsax-react'
import React, { useState } from 'react'

function AccountOrderItem() {
    const [active,setActive]=useState(false)
  return (
    <div className="account-order-item">
        <div className="account-order-item-header mb-4">
            <div className="account-order-item-pricing">
                <p className='account-order-item-pricing_text' >
                    <Wallet2 className='account-order-item-pricing_icon' />
                    مبلغ پرداخت شده: 1.569.000 تومان
                </p>
                <p className='account-order-item-pricing_text' >
                    <DiscountShape className='account-order-item-pricing_icon'/>
                    تخفیف کل: تومان۱۹0.000
                </p>
                <p className='account-order-item-pricing_text' >
                    <TruckFast className='account-order-item-pricing_icon' />
                    هزینه ارسال: ۱۹0.000 تومان
                </p>
            </div>
            <div className="account-order-item-status">
                <p className='account-order-item-status_badge'>ارسال با پیک</p>
                <p className='account-order-item-status_badge'>جاری</p>
            </div>
        </div>
        <div className="account-order-item-body">
            <div className="">
                <p className='account-order-item-pricing_text mb-4' >
                    <Location className='account-order-item-pricing_icon' />
                    تهران، نیاوران، تنگستان چهارم، مجتمع حیات سبز، طبقه چهارم، واحد ۱۳۲
                </p>
                <p className='account-order-item-pricing_text mb-4' >
                    <Calendar className='account-order-item-pricing_icon' />
                    پنجشنبه ۵ مهر ۱۴۰۳ ، ۱۳:۴۵
                </p>
            </div>
        </div>
        <div className="account-order-item-collapse" onClick={e=>{setActive(!active)}}>
            <p className="account-order-item-collapse-text">جزئیات سفارش</p>
            <button className="account-order-item-collapse-btn"><ArrowDown2 className='account-order-item-collapse-btn-icon' /></button>
        </div>
        <div className={`account-order-item-orderWrapper ${active?"active":''} `}>
            <div className="account-order-item-orderWrapper-header">
                <p className="account-order-item-orderWrapper-header_text" >عنوان کالا</p>
                <p className="account-order-item-orderWrapper-header_text" >تعداد</p>
                <p className="account-order-item-orderWrapper-header_text" >قیمت</p>
                <p className="account-order-item-orderWrapper-header_text" >قیمت</p>
                <p className="account-order-item-orderWrapper-header_text" >مبلغ کل</p>
            </div>
            <div className="account-order-item-orderWrapper-body">
                <div className="account-order-item-orderWrapper-row">
                    <p className='account-order-item-orderWrapper-row_text' >لباس میدی توری یاس</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱ عدد</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۹۹,۰۰۰ تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۸۰.000 تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۱۹,۰۰۰ تومان</p>
                </div>
                <div className="account-order-item-orderWrapper-row">
                    <p className='account-order-item-orderWrapper-row_text' >لباس میدی توری یاس</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱ عدد</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۹۹,۰۰۰ تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۸۰.000 تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۱۹,۰۰۰ تومان</p>
                </div>
                <div className="account-order-item-orderWrapper-row">
                    <p className='account-order-item-orderWrapper-row_text' >لباس میدی توری یاس</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱ عدد</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۹۹,۰۰۰ تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۸۰.000 تومان</p>
                    <p className='account-order-item-orderWrapper-row_text' >۱,۹۱۹,۰۰۰ تومان</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountOrderItem