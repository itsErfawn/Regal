import CartItemsInfo from '@/components/templates/cart/CartItemsInfo'
import CartItemsWrapper from '@/components/templates/cart/CartItemsWrapper'
import React from 'react'

function CartPage() {
  return (
    <div className="container max-laptop:gap-4">
        <div className="col-span-8 max-laptop:col-span-12"><CartItemsWrapper/></div>
        <div className="col-span-4 max-laptop:col-span-12"><CartItemsInfo/></div>
    </div>
  )
}

export default CartPage