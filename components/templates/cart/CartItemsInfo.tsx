import { Trash, Warning2 } from 'iconsax-react'
import React from 'react'

function CartItemsInfo() {
  return (
    <div className="cart-info-wrapper">
      <div className="cart-info-header">
        <h6 className='cart-info-title' >سبد خرید</h6>
        <Trash className='cart-info-trash' />
      </div>
      <div className="cart-info-body">
        <p className="cart-info-body-title">جزئیات پرداخت</p>
        <div className="cart-info-row">
          <p className='cart-info-row-text' >تعداد</p>
          <p className='cart-info-row-text' > 4 عدد</p>
        </div>
        <div className="cart-info-row">
          <p className='cart-info-row-text' >قیمت کالاها</p>
          <p className='cart-info-row-text' >9,496,۰۰۰ تومان</p>
        </div>
        <div className="cart-info-row">
          <p className='cart-info-row-text' >تخفیف</p>
          <p className='cart-info-row-text' >670,000 تومان</p>
        </div>
        <div className="cart-info-row">
          <p className='cart-info-row-text' >هزینه ارسال</p>
          <p className='cart-info-row-text' >۰ تومان</p>
        </div>
        <div className="flex gap-2 pb-4">
          <Warning2 className='stroke-warning-shade-1 w-4 h-4' />
          <p className='text-warning-shade-1 w-[95%] max-tablet:text-[14px]' >هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</p>
        </div>
        <div className="cart-info-row">
          <p className='cart-info-row-text' >مبلغ قابل پرداخت</p>
          <p className='cart-info-row-text' >8,826,۰۰۰ تومان</p>
        </div>
      </div>
      <div className="cart-info-footer">
        <p className='body-4 cart-info-footer-text' >کالاهای موجود در سبد شما رزرو و ثبت نشده اند. برای ثبت سفارش مراحل بعدی را تکمیل کنید.</p>
        <button className="btn primary cart-info-footer-button">ثبت سفارش</button>
      </div>
    </div>
  )
}

export default CartItemsInfo