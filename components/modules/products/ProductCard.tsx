import Link from 'next/link'
import React from 'react'

function ProductCard() {
  return (
    <Link className='product-card' href={'/'}>
        <img className='product-card_image' src="/assets/images/productCard.png" alt="" />
        <p className='product-card_title' >لباس میدی مدرن رایا</p>
        <p className='product-card_price' >3,502,000</p>
    </Link>
  )
}

export default ProductCard