import React from 'react';
import ProductColorItem from './ProductColorItem';
import { useProductStore } from '@/contexts/product/ProductStore';
function ProductColorWrapper({colors}: {colors:string[]}) {
  const {color,setColor}=useProductStore()
  return (
    <div>
      <p className="mb-1 max-tablet:mb-4">رنگبندی</p>
      <div className="product-color-wrapper">
        {colors.map(clr=>(
          <ProductColorItem key={clr} {...{mainColor:clr,color,setColor}} />
        ))}
      </div>
    </div>
  );
}

export default ProductColorWrapper;
