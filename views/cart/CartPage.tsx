"use client"
import CartItemsInfo from '@/components/templates/cart/CartItemsInfo'
import CartItemsWrapper from '@/components/templates/cart/CartItemsWrapper'
import CartProvider from '@/contexts/cart/CartContext'
import { CartCollectionType } from '@/types/cart'
import React from 'react'

function CartPage({data}:{data:CartCollectionType}) {
  return (
    <CartProvider data={data} >
    <div className="container max-laptop:gap-4">
        <div className="col-span-8 max-laptop:col-span-12"><CartItemsWrapper/></div>
        <div className="col-span-4 max-laptop:col-span-12"><CartItemsInfo/></div>
    </div>
    </CartProvider>
  )
}

export default CartPage