import React from 'react'
import CartItem from './CartItem'
import { useCartContext } from '@/contexts/cart/CartContext'

function CartItemsWrapper() {
  const carts=useCartContext()
  return (
    <div className="cart-wrapper">
        <div className="cart-header">
            <h6 className="cart-header-title">محصولات</h6>
            <h6 className="cart-header-title">قیمت</h6>
            <h6 className="cart-header-title">تعداد</h6>
            <h6 className="cart-header-title">جمع کل</h6>
        </div>
        <div className="cart-body">
          {carts?.map(cart=>(
            <CartItem key={cart.id} cart={cart}/>
          ))}
        </div>
    </div>
  )
}

export default CartItemsWrapper