import { ShoppingCart } from 'iconsax-react'
import { GitCompare } from 'lucide-react'
import React from 'react'

function ProductsButtonWrapper() {
  return (
        <>
    <div className='flex items-center gap-2 mt-10 max-tablet:hidden' >
        <button className='btn-md out-line product-compare-btn' >
            <GitCompare className='product-compare-icon' />
            <span className='product-compare-text'>مقایسه محصول</span>
        </button>
        <button className='btn-md primary product-addCart-btn' >
            <ShoppingCart className='product-addCart-icon' />
            <span className='product-addCart-text'>افزودن به سبد خرید</span>
        </button>
    </div>
    <div className="tablet:hidden product-btn-container-mobile">
        <div className="product-btn-wrapper-mobile">
            <div className="product-price-wrapper-mobile">
            <p className='product-info-price-discount caption-2' >15%</p>
            <p className="product-info-price-old body-4"> 300,000 تومان</p>
            <h5 className="product-info-price"> 300,000 تومان</h5>
            </div>
            <div className="product-btn-row-mobile">
                <button className="btn-sm out-line product-compare-btn-mobile" ><GitCompare className='product-compare-icon' /></button>
                <button className='btn-sm primary product-addCart-btn-mobile' >
            <ShoppingCart className='product-addCart-icon' />
            <span className='product-addCart-text'>افزودن به سبد خرید</span>
        </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductsButtonWrapper