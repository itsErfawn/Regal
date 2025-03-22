import { Star, StarSlash } from 'iconsax-react'
import { StarIcon } from 'lucide-react'
import React from 'react'

function ProductStarWrapper() {
  return (
    <div className='product-star-wrapper' >
    <StarIcon className='product-star-icon' />
    <StarSlash className='product-star-icon fill' />
    <StarSlash className='product-star-icon fill' />
    <StarSlash className='product-star-icon fill' />
    <StarSlash className='product-star-icon fill' />
    <p className='product-review-text-title' >(۵۶ نظر)</p>
    </div>
  )
}

export default ProductStarWrapper