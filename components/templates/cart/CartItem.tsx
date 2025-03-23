"use client"
import { Add, Minus } from 'iconsax-react'
import React, { useState } from 'react'
function CartItem() {
    let [count, setCount] = useState(2)
  return (
    <div className="car-item">
        <div className="cart-item-block flex items-center gap-4 max-tablet:items-start">
            <div className="car-item-image-wrapper">
                <img src="/assets/images/cart.png" alt="" className="car-item-image" />
            </div>
            <div className="">
                <p className="cart-item-title">لباس میدی رکسان</p>
                <div className="max-tablet:flex items-center gap-2">
                <p className="cart-item-option">سایز: M</p>
                <div className="cart-item-option-color">
                    رنگ:
                    <div className="cart-item-option-prev"></div>
                </div>
                </div>
            </div>
        </div>
        <div className="cart-item-block max-laptop:w-6/12 max-tablet:mt-2">
            <p className='cart-item-special' >
                <span className="cart-item-special-price"> 2,800,000 </span>
                <span className='cart-item-special-discount' >15%</span>
            </p>
            <p className='cart-item-price' >2,380,000 تومان</p>
        </div>
        <div className="cart-item-quantity-wrapper max-laptop:w-6/12 max-tablet:mt-2">
            <button className="cart-item-quantity-btn" onClick={e=>{setCount(count++)}}>
                <Add className="cart-item-quantity-btn-icon"  />
            </button>
            <p className='cart-item-quantity-input' >{count}</p>
            <button className="cart-item-quantity-btn" onClick={e=>{setCount(count--)}}>
                <Minus className="cart-item-quantity-btn-icon" />
            </button>
        </div>
        <div className="cart-item-block max-laptop:w-6/12 max-laptop:hidden">
            <p className='cart-item-total' >2,380,000 تومان</p>  
        </div>
    </div>
  )
}

export default CartItem